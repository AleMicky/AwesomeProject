import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

type Tasks = {
  id?: string;
  name: string;
  description: string;
};

type TasksResponse = Tasks[];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://late-fog-2935.fly.dev',
  }),
  tagTypes: ['Tasks'],
  endpoints: builder => ({
    getTasks: builder.query<TasksResponse, void>({
      query: () => '/tasks',
      transformResponse: (response: any) =>
        response.sort((a: any, b: any) => b.id - a.id),
      providesTags: ['Tasks'],
    }),
    createTask: builder.mutation<Tasks, Partial<Tasks>>({
      query: body => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
});

export const {useGetTasksQuery, useCreateTaskMutation} = apiSlice;
