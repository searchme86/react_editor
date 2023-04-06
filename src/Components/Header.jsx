import React from 'react';

function Header() {
  const testStyle = {
    backgroundColor: 'yellow'
  };
  return (
    <header>
      <div className="" style={testStyle}>
        <div className="logo">로고</div>
        <div className="">
          <p>여기에는 인풋바</p>
        </div>
        <div className="right">버튼모음</div>
      </div>
    </header>
  );
}

export default Header;
