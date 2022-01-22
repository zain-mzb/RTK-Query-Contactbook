import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    contacts: builder.query<Contact[], void>({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    contact : builder.query<Contact, string>({
        query: (id)=>  `/contacts/${id}`,
        providesTags: ["Contacts"],
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: builder.mutation<void, Contact>({
        query: ({id, ...rest}) =>({
            url:`/contacts/${id}`,
            method: "PUT",
            body: rest
        }),
        invalidatesTags: ["Contacts"],
    })
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactsApi;
