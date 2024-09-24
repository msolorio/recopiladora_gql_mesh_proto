const getData = async function () {
  const query = `
    query {
      todos {
        id
        name
        content
        author {
          first
          last  
        }
      }
    }
  `;

  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const responseBody = (await response.json()) as { errors?: Array<Error>; data?: any };

  if (responseBody.errors) {
    console.error("GraphQL Errors:", responseBody.errors);
    return null;
  }

  return responseBody.data;
};

getData()
  .then((data) => console.log(data))
  .catch(console.error);
