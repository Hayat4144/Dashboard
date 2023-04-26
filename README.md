# E-commerce Dashboard

This is an E-commerce Dashboard built using React, Tailwind CSS, Vite, Redux, and Chart.js. The dashboard provides various features for managing products, orders, and transactions. It also includes a chat functionality and supports light and dark themes. Authentication is implemented for secure access to the dashboard.

## Features

- **Dashboard Overview:** Provides a comprehensive overview of the store's performance with visually appealing charts, including order charts displaying metrics such as total orders, revenue, and order status, as well as a transaction donut chart visualizing the distribution of transactions by type.
- **Product Management:**
  - **Add Product:** Allows the store owner to easily add new products with image upload and support for product variations such as size, color, etc., enabling efficient management of the product catalog and effective showcasing of products to customers.
  - **Edit and Delete Product:** Provides options to edit and delete existing products, allowing the store owner to update product information or remove products that are no longer available.
  - **Product API Read with Pagination:** Fetches products from the API with pagination, displaying a limited number of products (e.g., 10 per page) for better performance and user experience.
- **Order Management:**
  - **Order Filter based on Date:** Allows the store owner to filter orders based on date, providing the ability to view orders within a specific time range and track sales performance over time.
- **Chat Functionality:** Includes a chat feature that allows real-time communication between the store owner and customers, facilitating prompt customer support and enhancing the overall shopping experience.
- **Theme Switch for Light and Dark Themes:** Provides a theme switch that allows the user to switch between light and dark themes based on their preference, providing a visually appealing and customizable user interface.
- **Authentication System:** Implements an authentication system for secure access to the dashboard, ensuring that only authorized users can view and manage the store's data.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- Tailwind CSS: A highly customizable CSS framework for modern web development.
- Vite: A fast build tool and development server that works with modern web technologies.
- Redux: A state management library for managing global state in a React application.
- Chart.js: A powerful charting library for creating interactive charts.
- Authentication System: Implement your preferred authentication system for secure access to the dashboard.

## Getting Started

1. Clone this repository to your local machine using the below command.

```bash
 git clone https://github.com/Hayat4144/Dashboard
```

2. Navigate to the project directory using the following command.

```bash
cd Dashboard
```

3. Install the project dependencies using the command

```bash
npm install
```

4. Start the development server using the command.

```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000 to view the app



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_BACKEND_URL` for production

`VITE_BACKEND_DEV_URL` for development


## Contributing

Contributions are always welcome! If you find a bug or want to suggest a new feature, please open an issue or submit a pull request.

## License

This app is licensed under the MIT License. Feel free to use it for your own projects.
