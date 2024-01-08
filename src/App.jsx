import './App.css';
import Table from './Table';

function App() {

  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'City', dataIndex: 'city' }
];

const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { name: 'Emily Johnson', age: 35, city: 'Chicago' }
];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Table columns={columns} data={data}/>
        </p>
      </header>
    </div>
  );
}

export default App;
