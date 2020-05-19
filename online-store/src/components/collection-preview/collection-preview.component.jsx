import React, { useContext, useEffect } from "react";
import "./collection-preview.styles.scss";
import { GlobalState } from "../../state/GlobalState";

const CollectionPreview = ({ id, title, items }) => {
  const { addToCart } = useContext(GlobalState);

  useEffect(() => {
    console.log("----CollectionPreview [] useEffect-----");
  }, []);

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items.map(item => (
          <div key={item.id}>
            {item.name}
            <button
              onClick={() => {
                addToCart(item);
              }}
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
