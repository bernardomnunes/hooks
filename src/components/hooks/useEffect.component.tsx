import { useState, useEffect } from 'react'

function UseEffect() {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      )
      const responseJSON = await response.json()

      setItems(responseJSON)
    }

    fetchResourceTypes()
  }, [resourceType])
  return (
    <>
      <div
        className="useEffect-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '6px',
          fontSize: '18px'
        }}>
        <h1>{resourceType}</h1>
        <div className="container-buttons" style={{ margin: '7px' }}>
          <button
            onClick={() => setResourceType('posts')}
            style={{ margin: '1.5px', fontSize: '15px', padding: '8px' }}>
            posts
          </button>
          <button
            onClick={() => setResourceType('comments')}
            style={{ margin: '1.5px', fontSize: '15px', padding: '8px' }}>
            comments
          </button>
          <button
            onClick={() => setResourceType('todos')}
            style={{ margin: '1.5px', fontSize: '15px', padding: '8px' }}>
            todos
          </button>
        </div>

        <div
          className="items-container"
          style={{
            marginTop: '10px',
            height: '75vh',
            overflowY: 'scroll',
            width: '75vw'
          }}>
          {items.map((item, index) => (
            <div className="item-container" key={index}>
              <h2
                style={{
                  margin: '16px',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}>
                {item.title}
              </h2>
              <h3
                style={{
                  margin: '12px',
                  fontWeight: 'normal',
                  fontSize: '14px'
                }}>
                {item.body}
              </h3>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default UseEffect
