import './categories.styles.scss'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Box 1',
    },
    {
      id: 2,
      title: 'Box 2',
    },
    {
      id: 3,
      title: 'Box 3',
    },
    {
      id: 4,
      title: 'Box 4',
    },
    {
      id: 5,
      title: 'Box 5',
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map(({ title, id }) => (
        <div key={id} className='catergory-container'>
          <div className='background-image' />
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Get Inside Now</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
