import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GlobalStyles from "./assets/styles/GlobalStyles";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 0,
			// staleTime: 60 * 1000,
		},
	},
});

function App() {
	return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/show/:id" element={<Details />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
