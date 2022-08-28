import { IEmployee, IEmployeeCreate } from "_types/Employee";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryOptions } from "_utils/rtkQuery.utils";

export const employeesApi = createApi({
    reducerPath: 'employeesApi',
    baseQuery: fetchBaseQuery(baseQueryOptions),
    tagTypes: ['Employees'],
    endpoints: (builder) => ({
        getEmployees: builder.query<IEmployee[], void>({
            query: () => '/employees',
            providesTags: ['Employees']
        }),
        addEmployee: builder.mutation({
            query: (employee: IEmployeeCreate) => ({
                url: '/employees',
                method: 'POST',
                body: employee
            }),
            invalidatesTags: ['Employees']
        }),
        updateEmployee: builder.mutation({
            query: (employee: IEmployee) => ({
                url: `/employees/${employee.id}`,
                method: 'PUT',
                body: employee
            }),
            invalidatesTags: ['Employees']
        }),
        deleteEmployee: builder.mutation({
            query: (id: string) => ({
                url: `/employees/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Employees']
        }),
        searchEmployees: builder.mutation({
            query: ({ query, limit }: { query: string, limit: number }) => ({
                url: `/employees/search`,
                method: 'GET',
                params: { query, limit }
            }),
            invalidatesTags: ['Employees']
        }),
    })
})

export const {
    useGetEmployeesQuery,
    useAddEmployeeMutation,
    useDeleteEmployeeMutation,
    useSearchEmployeesMutation,
    useUpdateEmployeeMutation
} = employeesApi