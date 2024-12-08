# Fever Pets

A web application to manage and view information about pets.

## Features

- **Browse Pets**: View a grid of pets with their names and images.
- **Pet Details**: Click on a pet to navigate to their detailed view.
- **Pagination**: Navigate through multiple pages of pets.
- **Sorting**: Sort the pet list based on different criteria.

## Technologies Used

- **React**
- **Next.js**
- **TypeScript**
- **next-intl**
- **Styled-components**
- **Jest & React Testing Library**

## Table of Contents

- [Architecture](#architecture)

- [Folder Structure](#folder-structure)

- [Data Fetching](#data-fetching)

- [Routing](#routing)

- [Technical Decisions](#technical-decisions)

- [Why React and React Router?](#why-react-and-react-router)

- [State Management with React Query](#state-management-with-react-query)

- [Component based architecture](#component-based-architecture)

## Architecture

- **API Layer**: The `services/` folder handles all data-fetching logic. It encapsulates the logic for making API requests related to pets and allows easy modification or replacement of data sources if needed.
- **Components**: The `components/` folder contains reusable, presentation-focused components.
- **Custom Hooks**: The `infrastructure/` folder includes custom hooks, responsible for fetching data, using React Query.
- **Pages**: The `app/[locale]` folder contains route-specific components, with dynamic locale-based routing. The `page.tsx` files in this folder serve as entry points for each locale-specific route, rendering the corresponding content based on the user's language preference (e.g., `/en`, `/es`).
- **Internationalization**: The `i18n/` folder manages internationalization using `next-intl`, providing locale-based routing, message handling, and localization of the app's content.
- **Types**: The `types/` folder includes TypeScript types
- **UI**: The `ui/` folder contains reusable UI components that can be used throughout the application.
- **Tests**: The `tests-utils/` folder includes utility files to mock data. The test files themselves are located in appropriate folders alongside components and pages to ensure everything is properly tested.

This design promotes separation of concerns, modularity, and reusability, making the app easy to maintain and extend.

### Folder Structure

```plaintext

src/
	app/
		[locale]/ # Dynamic locale-based folders
			components/ # React components for rendering UI
				[id]/ # Dynamic route for individual pet pages
			_mocks_/ # Mock data for testing
			infrastructure/ # Custom hooks and data fetching
			services/ # Business logic for pets
			tests-utils/ # Test helpers and mocks
			types/ # TypeScript types for pets and other components
			ui/ # Reusable UI components ...
	i18n/ # Internationalization (next-intl) setup
	lib/ # Utility functions
```

### Data Fetching

Data is fetched with **React Query**, which simplifies the process of fetching, caching, and synchronizing server data in React applications.

We use React Query to ensure the pet data is fetched efficiently and updated in the UI when required, reducing unnecessary API calls.

### Routing

**Nextjs** is used to handle navigation:

- `/` – Displays the `PetGrids` component.

- `/:id` – Shows the `PetDetail` page

- `/en` or `/es` – Locale-based routes for displaying content in English or Spanish.

## Technical Decisions

### State Management with React Query

React Query was chosen for:

- **Efficient caching**: Reduces API calls, improving performance by storing transaction data locally.

- **Automatic updates**: React Query automatically refetches data when components mount, ensuring fresh data is displayed.

### Component based architecture

Breaking down the UI into small, reusable components helps maintain a clean and organized codebase. I decided to create smalls components to maintain modularity, reusability and scalibility
