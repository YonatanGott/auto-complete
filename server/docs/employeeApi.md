# Employee API

- [Employee API](#employee-api)
  - [Create Employee](#create-employee)
    - [Create Employee Request](#create-employee-request)
    - [Create Employee Response](#create-employee-response)
  - [Get Employee](#get-employee)
    - [Get Employee Request](#get-employee-request)
    - [Get Employee Response](#get-employee-response)
  - [Update Employee](#update-employee)
    - [Update Employee Request](#update-employee-request)
    - [Update Employee Response](#update-employee-response)
  - [Delete Employee](#delete-employee)
    - [Delete Employee Request](#delete-employee-request)
    - [Delete Employee Response](#delete-employee-response)
  - [Search Employee](#search-employee)
    - [Search Employee Request](#search-employee-request)
    - [Search Employee Response](#search-employee-response)

## Create Employee

### Create Employee Request

```js
POST /employees
```

```json
{
    "name": "Name Employee",
    "workTitle": "Programmer",
    "imageUrl": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
}
```

### Create Employee Response

```js
201 Created
```

```json
{
    "id": "00000000-0000-0000-0000-000000000000",
    "name": "Name Employee",
    "workTitle": "Programmer",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
}
```

## Get Employee

### Get Employee Request

```js
GET /employees
```

### Get Employee Response

```js
200 Ok
```

```json
[{
   "id": "00000000-0000-0000-0000-000000000000",
    "name": "Name Employee",
    "workTitle": "Programmer",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
},
{
   "id": "00000000-0000-0000-0000-000000000001",
    "name": "Name Worker",
    "workTitle": "Manager",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
},
...,
]
```

## Update Employee

### Update Employee Request

```js
PUT /employees/:id
```

```json
{
   "id": "00000000-0000-0000-0000-000000000001",
    "name": "Name Worker",
    "workTitle": "Manager",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
}
```

### Update Employee Response

```js
204 No Content
```

or

```js
201 Created
```

```json
{
   "id": "00000000-0000-0000-0000-000000000001",
    "name": "Name Worker",
    "workTitle": "Manager",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
}
```

## Delete Employee

### Delete Employee Request

```js
DELETE /employees/{{id}}
```

### Delete Employee Response

```js
204 No Content
```

## Search Employee

### Search Employee Request

```js
GET /employees/search/?query={query}&limit={limit}
```

### Search Employee Response

```js
200 Ok
```

```json
[{
   "id": "00000000-0000-0000-0000-000000000000",
    "name": "Name Employee",
    "workTitle": "Programmer",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
},
{
   "id": "00000000-0000-0000-0000-000000000001",
    "name": "Name Worker",
    "workTitle": "Manager",
    "startDateTime": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
},
...,
]
```