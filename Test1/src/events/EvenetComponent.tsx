import React from "react";


const EventComponent: React.FC = () => {
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const OnDragStart=(event:React.DragEvent<HTMLDivElement>)=>{
    console.log(event);
    
  }
  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={OnDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
