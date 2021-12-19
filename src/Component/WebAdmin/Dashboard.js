// import { addDoc, collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { addDoc, collection, query, onSnapshot, doc, deleteDoc, getDoc, db } from "./../../Firebase";
import './../../App.css';
import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";



function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {

        const q = query(collection(db, "Rashan"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
    
          let temp = [];
          snapshot.forEach((doc) => {
    
            let id = doc.id;
            let data = doc.data();
    
            temp.unshift({
              
              name:data. name,
              fname:data.fname,
              email:data. email,
              dob:data. dob,
              fmember:data. fmember,
              income:data. income,
              selectedValue:data.selectedValue,
            });
          })
          setData(temp)
        });
    
        return () => {
          unsubscribe()
          console.log("unsub")
        };
      }, []);



    return (
        <>
        
            <h1 id="title">Application for Kahana</h1>

            <div className="requestcards">
                {data.map((eachUser, i) => {

                    return (<div key={i}>

                        <div id="cards">
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title >Application</Card.Title>
                                    <Card.Text>
                                    {eachUser.name}
                                    </Card.Text>
                                    <Card.Text>
                                    {eachUser.fname}
                                    </Card.Text>
                                    <Card.Text>
                                    {eachUser.email}
                                    </Card.Text>
                                    <Card.Text>
                                    {eachUser.dob}
                                    </Card.Text>
                                    <Card.Text>
                                    {eachUser.fmember}
                                    </Card.Text>
                                    <Card.Text>
                                    {eachUser.income}
                                    </Card.Text>
                                    <Card.Text>
                                    {eachUser.selectedValue}
                                    </Card.Text>
                                    
                                    <div className="buttons">
                                    <Button variant="success" className="btn">Accept</Button>
                                    <Button variant="success">Reject</Button>
                                    </div>
                                </Card.Body>
                            </Card>


                        </div>
                        <br />
                    </div>)
                })}
            </div>

        </>

    )
}

export default Dashboard;