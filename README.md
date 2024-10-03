# Data Visualization Dashboard

## Overview

The Data Visualization Dashboard is a web application designed to analyze global trends using various types of charts. It allows users to filter data based on different parameters such as end year, topic, sector, and region. The dashboard utilizes the Recharts library for interactive and responsive visualizations and Material-UI for a modern user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Components](#components)
- [License](#license)

## Features

- Interactive data visualizations using Bar, Line, Scatter, and Pie charts.
- Filtering options to refine the displayed data.
- Responsive design for optimal viewing on different devices.
- Simulated API call to load data from a local JSON file.

## Technologies Used

- **Frontend**: 
  - React
  - Recharts
  - Material-UI
- **Backend**:
  - Node.js
  - Express
  - MongoDB (optional, for future enhancements)
- **Data**: JSON file containing insights and trends data.

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- npm (Node package manager)

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name
   ```

2. **Install frontend dependencies**:
   Navigate to the frontend directory and install the required packages.
   ```bash
   cd dashboard-frontend
   npm install
   ```

3. **Run the frontend**:
   Start the development server:
   ```bash
   npm start
   ```
   The app will run on `http://localhost:3000`.

### Optional: Backend Setup

If you want to implement a backend, navigate to the backend directory (assuming you have one) and run:
1. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Run the backend**:
   ```bash
   node server.js
   ```
   The backend server will run on `http://localhost:5000`.

## Usage

- Once the frontend is running, open your browser and go to `http://localhost:3000`.
- You will see the dashboard with various chart options.
- Use the filters to refine the data displayed in the charts.
- Select the chart type from the dropdown to visualize the data differently.

## API

- The backend API (if implemented) provides the following endpoint:
  - `GET /api/data`: Returns the data for visualization in JSON format.

## Components

### 1. Dashboard
- **Description**: The main component that renders the overall layout, including filters and the chart selector.
- **Props**:
  - `data`: Array of data objects to be visualized.
  - `applyFilters`: Function to apply selected filters to the data.

### 2. Filters
- **Description**: A component to select various filters for the data visualization.
- **Props**:
  - `applyFilters`: Function to apply selected filters.
  - `data`: Array of data objects for generating filter options.

### 3. ChartSelector
- **Description**: A component for selecting the type of chart to display.
- **Props**:
  - `chartType`: Current selected chart type.
  - `setChartType`: Function to update the chart type.

### 4. Chart
- **Description**: A component responsible for rendering the selected chart type based on the filtered data.
- **Props**:
  - `data`: Filtered data to be visualized.
  - `chartType`: The type of chart to render.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of [Recharts](https://recharts.org/en-US/) and [Material-UI](https://mui.com/) for their excellent libraries that enhance the development experience.
