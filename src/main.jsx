import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root'
import Home from './Components/Home'
import DonationDetails from './Components/DonationDetails'
import DonationPage from './Components/DonationPage'
import Statistics from './Components/Statistics'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home /> 
			},
            {
                path: 'donation-details/:donationId',
                element: <DonationDetails />
            },
            {
                path: 'donation',
                element: <DonationPage />
            },
            {
                path: 'statistics',
                element: <Statistics />
            },
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
