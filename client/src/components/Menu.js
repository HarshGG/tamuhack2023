// rfce
import React from 'react'

function Menu({window, setWindow, menuItems}) {

    console.log("creating menu with options", menuItems);
  return (
    <div>
        <div className="header">
            {menuItems.map(opt =>
                <button 
                    id={opt}
                    class={"titleButton " + ((window === opt) ? "selected" : "")} 
                    onClick={() => setWindow(opt)}
                >
                    {opt}
                </button>
            )}
        </div>
      
    </div>
  )
}

export default Menu
