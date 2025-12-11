import { useState, useEffect } from 'react';

import './App.css';
import AddStudent from './AddStudent';
import SearchStudent from './SearchStudent';
import Body from './Body';

function App() {

  const [stuList, setStuList] = useState(() => {
    const savedList = localStorage.getItem('stuList');
    return savedList ? JSON.parse(savedList) : [
      { id: 1, sname: "Jack", fee: true },
      { id: 2, sname: "Smith", fee: false },
      { id: 3, sname: "Victor", fee: true }
    ];
  });

  const [newstu, setNewStu] = useState('');
  const [search, setSearch] = useState('');

  // Save stuList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('stuList', JSON.stringify(stuList));
  }, [stuList]);

  const handleDelete = (id) => {
    const newList = stuList.filter((stu) => stu.id !== id);
    setStuList(newList);
  };

  const handleChange = (id) => {
    const newList = stuList.map((stu) =>
      stu.id === id ? { ...stu, fee: !stu.fee } : stu
    );
    setStuList(newList);
  };

  const addItem = (item) => {
    const lastIndex = stuList.length - 1;
    const nid = stuList.length ? stuList[lastIndex].id + 1 : 1;

    const newObj = { id: nid, sname: item, fee: false };
    setStuList([...stuList, newObj]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newstu);
    setNewStu('');
  };

  return (
    <>
      <h1>Students List</h1>

      <AddStudent
        newstu={newstu}
        setNewStu={setNewStu}
        handleSubmit={handleSubmit}
      />

      <SearchStudent
        search={search}
        setSearch={setSearch}
      />

      <Body
        stuList={stuList.filter((list) =>
          list.sname.toLowerCase().includes(search.toLowerCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;