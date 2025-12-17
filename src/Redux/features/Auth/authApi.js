import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "../../../utils/useGetUrl";


export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseUrl()}api/auth`,
    credentials: "include",
    
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    SignUpUser: builder.mutation({
      query: (newUser) => ({
        url: "/create-user",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags:["Users"]
    }),

    

   
    editProfile: builder.mutation({
      query: ({ id, profileData }) => ({
        url: `/edit-profile/${id}`,
        method: "PATCH",
        body: profileData,
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/users/${userId}`,
        body: {role},
        method: "PUT",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useEditProfileMutation,
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
} = authApi;

export default authApi;