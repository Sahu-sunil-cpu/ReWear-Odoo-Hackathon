import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";

export const useUserStore = create((set, get) => ({

    user: null,
    loading: false,
    signup: async ({ name, password, email, confirmPassword }) => {
        set({ loading: true })

        console.log("name : ",name, password,email,confirmPassword);

        if (password !== confirmPassword) {
            set({ loading: false });
            return toast.error("Password doesn't match");
        }

        try {
            // const res = await axios.post('localhost:5000/api/v1/auth/signup', { username: name, password, email })
            const res = await axios.post('http://localhost:5000/api/v1/auth/signup',
                { username: name, password, email },
                { withCredentials: true }
            )
            console.log("res in signup :: ",res);
            set({ loading: false });
            console.log("Response from signup route : ", res.data);
            set({ user: res.data });
        } catch (error) {
            set({ loading: false });
            // console.log(error.response.data.error)
            console.log(error);
            return toast.error(error.response.data.error || "Error occured");
        }
    },
    login: async ({ email, password }) => {
        set({ loading: true });
        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/login",
                { email, password },
                { withCredentials: true }
            );
            console.log("In Login store", res.data.data);
            set({ user: res.data, loading: false })
        } catch (error) {
            set({ loading: false });
            // console.log("Error in login method in useStore :", error.response.data);

            console.log("error in login :",error);
            return toast.error(error.response.data.error || "Error occured");
        }
    },
    logout: async () => {
        try {

            await axios.post('localhost:5000/api/v1/auth/logout', { withCredentials: true });
            set({ user: null });
        } catch (error) {
            console.log(error.response.data.error);
            return toast.error(error.response.data.error || "Error occured");
        }
    },
    checkAuth: async () => {
        set({ checkingAuth: true });

        try {
            const res = await axios.get('http://localhost:5000/api/v1/auth/profile');
            // console.log("User in get profile:",res.data);
            console.log("user in checkauth :: ",res);
            set({ user: res.data, checkingAuth: false });
        } catch (error) {
            console.log("Error in user get profile checkauth:", error);
            set({ user: null, checkingAuth: false });
        }
    }
}))

// let refreshPromise = null;
// const MAX_RETRIES = 3;

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         // If a refresh is already in progress, wait for it to complete
//         if (refreshPromise) {
//           await refreshPromise;
//         } else {
//           // Start a new refresh process
//           refreshPromise = useUserStore.getState().refreshToken();
//           await refreshPromise;
//           refreshPromise = null;
//         }

//         // Retry the original request
//         return axios(originalRequest);
//       } catch (refreshError) {
//         // If refresh fails, redirect to login or handle as needed
//         useUserStore.getState().logout();
//         return Promise.reject(refreshError);
//       }
//     } else if (error.response?.status === 401 && originalRequest._retry < MAX_RETRIES) {
//       originalRequest._retry++;
//       return axios(originalRequest);
//     }

//     return Promise.reject(error);
//   }
// );
