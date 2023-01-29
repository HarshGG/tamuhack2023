// rfce
import React from 'react'

function Menu({window, setWindow, menuItems}) {

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
