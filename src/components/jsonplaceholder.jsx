import React, { useEffect, useState } from 'react'

const jsonplaceholder = () => {
    // Set data, loading and error state

    // useEffect to call the api endpoint

    // empty bracket-dependency array for one time render

    // if isloading give the prompt loading...

    // if error give the prompt error

    // if data print out the data from the endpoint

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
              
              if (!response.ok) {
                  throw new Error(`Http error status ${response.status}`)
              }

            //   Parse the JSON response
              const jsonData = await response.json();

              setData(jsonData)
              setIsLoading(false)

              console.log(response)
          } catch (err) {
              setError(err)
              setIsLoading(false);
          }
        }
        fetchData()
  }, [])
    return (

        <div>
            <h1>
                JSONPLACEHOLDER
            </h1>
            {isLoading && <>Loading...</>}
            {error && <p>Error: {error.message}</p>}
            {data && (<>
                <h1>
                    Data
                </h1>
                <div>{data.id}</div>
                <div>{data.title}</div>
                <div>{data.completed}</div>
            </>

            )}
        </div>
  )
}

export default jsonplaceholder