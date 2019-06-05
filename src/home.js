import React from 'react';
import pic1 from './img/pj1.jpg'
import pic2 from './img/pj2.png'
import pic3 from './img/pj3.png'
import pic4 from './img/pj4.jpg'
import pic5 from './img/pj5.jpg'
import pic6 from './img/pj6.jpg'
import pic7 from './img/pj7.jpg'
import pic8 from './img/pj8.png'
import pic9 from './img/pj9.png'
import pic10 from './img/pj10.jpg'
import pic11 from './img/pj11.jpg'
import pic12 from './img/pj12.jpg'
import pic13 from './img/pj13.jpg'
import pic14 from './img/pj14.jpg'
import Card from './components/card/index';
class home extends React.Component {
 state ={
     pics:[{
         id:1,
         pic:pic1
     },
     {
         id:2,
         pic:pic2
     },
     {
        id:3,
        pic:pic3
    },
    {
        id:4,
        pic:pic4
    },
    {
        id:5,
        pic:pic5
    },
    {
        id:6,
        pic:pic6
    },
    {
        id:7,
        pic:pic7
    },
    {
        id:8,
        pic:pic8
    },
    {
        id:9,
        pic:pic9
    },
    {
        id:10,
        pic:pic10
    },
    {
        id:11,
        pic:pic11
    },
    {
        id:12,
        pic:pic12
    },
    {
        id:13,
        pic:pic13
    },
    {
        id:14,
        pic:pic14
    },
    ]
 }
 handleclick = ()=> {
     console.log('u got clicked')

     function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
var oldArray = this.state.pics
var ReorderArray = shuffle(oldArray)
this.setState({
    pics:ReorderArray
})
 }
 

  render() {
      console.log(this.state,"src")
    return (
        <div>
      <div>Click on the PJ Poater Images ..... Try not to click the same box twice !!!</div>
      {this.state.pics.map((singleobj)=>{
         return<Card pic={singleobj.pic} id= {singleobj.id} click = {this.handleclick}/> 
      })}
      
      </div>

    );
    
  }
  
  

  
}

export default home;