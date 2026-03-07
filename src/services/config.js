import axios from "axios";
export const http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn/api",
  timeout: 30000,
  headers: {
    tokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgNDYiLCJIZXRIYW5TdHJpbmciOiIwMS8wMS8yMDMwIiwiSGV0SGFuVGltZSI6IjE4OTM0NTYwMDAwMDAiLCJuYmYiOjE3MzE4MDE2MDAsImV4cCI6MTg5MzQ1NjAwMH0.kI0iRT1EKmR0tRXXOn5xKnoXZZQo0FoCu4mb1f8ayLc",
  },
});
