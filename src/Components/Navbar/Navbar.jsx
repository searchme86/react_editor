import React from 'react';

function Navbar() {
  const testStyle = {
    backgroundColor: 'blue'
  };

  return (
    <div style={testStyle}>
      <div className="">
        <ul>
          <li>홈</li>
          <li>문서</li>
          <li>상품</li>
          <li>템플릿</li>
          <li>조직</li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li>유저등록</li>
          <li>환경설정</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
