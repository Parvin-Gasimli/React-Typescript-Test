import React from "react";

interface ChildProps {
  color: string;
  onClick:()=>void
}

const Child = ({ color,onClick }: ChildProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>
        Click Me
      </button>
    </div>
  );
};
export default Child;

export const ChildAsFC: React.FC<ChildProps> = ({ color,onClick }) => {
  return <div>{color}
 <button onClick={onClick}>Click me</button> 
  </div>;
};

