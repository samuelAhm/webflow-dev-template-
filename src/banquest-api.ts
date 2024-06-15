export const paymentAPI = function () {
  // console.log('payment');
  // async function postDataWithBasicAuth(url, username, password, jsonData) {
  //   // Encode username and password in base64
  //   const base64Credentials = btoa(username + ':' + password);
  //   try {
  //     // Use the Fetch API with async/await for a POST request
  //     const response = await fetch(url, {
  //       method: 'POST', // Specify the method
  //       headers: {
  //         Authorization: 'Basic ' + base64Credentials, // Basic Authentication header
  //         'Content-Type': 'application/json', // Specify the content type as JSON
  //       },
  //       body: JSON.stringify(jsonData), // Convert the JSON data to a string
  //     });
  //     // Check if the request was successful
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     // Parse the JSON response
  //     const data = await response.json();
  //     // Use or return the data from the response
  //     console.log(data);
  //     return data; // You can return the data to use it outside the function
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     throw error; // Rethrow the error if you want to handle it outside the function
  //   }
  // }
  // // Replace 'yourUsername', 'yourPassword', and 'yourApiUrl' with actual values
  // // Also, replace 'jsonData' with the actual JSON payload you need to send
  // const apiUrl = 'https://api.sandbox.banquestgateway.com/api/v2/transactions/charge';
  // const username = 'X5MMKMV95FAv1CwXbPdq8EZraUch2u5S';
  // const password = '123456';
  // const jsonData = {
  //   amount: 0.01,
  //   name: 'test name',
  //   routing_number: '10103344',
  //   account_number: 'string',
  //   account_type: 'checking',
  //   sec_code: 'PPD',
  // };
  // postDataWithBasicAuth(apiUrl, username, password, jsonData)
  //   .then((data) => {
  //     // Handle the response data
  //     console.log('Successfully posted data:', data);
  //   })
  //   .catch((error) => {
  //     // Handle any errors
  //     console.error('Failed to post data:', error);
  //   });
  //   console.log('hello banquest');
  //   const apiKey = 'zkVpxYYYU73T5ct2wv0hrlzTI9bcZTZB'; // Your API key or token
  //   const url = 'https://api.banquestgateway.com/endpoint'; // API endpoint you're calling
  //   const headers = {
  //     Authorization: `Bearer ${apiKey}`, // Or "Token ${apiKey}" or another format depending on the API
  //     'Content-Type': 'application/json',
  //   };
  //   fetch(url, {
  //     method: 'GET', // or 'POST', 'PUT', 'DELETE', etc., depending on the action you're performing
  //     headers: headers,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error('Error:', error));
};
