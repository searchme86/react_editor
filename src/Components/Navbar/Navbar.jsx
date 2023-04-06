import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Navbar() {
  return (
    <NavContainer>
      <ul>
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>홈</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>문서</span>
            </div>
          </Link>
          <div className="subMenu">
            <div className="">
              {/* 이미지 */}
              <span>기초서류관리</span>
            </div>
            <ul>
              <li>
                <Link to="/document/management">
                  <div className="">
                    {/* 이미지 */}
                    <span>문서관리!!!! </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div className="">
                    {/* 이미지 */}
                    <span>문서작성편집</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>문서일괄편집</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>맞춤형 약관</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
            <span>상품</span>
          </Link>
          <div className="subMenu">
            <div className=""></div>
            <ul>
              <li>
                <Link to="/">
                  <span>상품 정보관리</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>상품 분류관리</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>상품 항목관리</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>문서</span>
            </div>
          </Link>
          <div className="subMenu">
            <div className=""></div>
            <ul>
              <li>
                <Link to="/">
                  <span>특약관리</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>분류표 관리</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>서식관리</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>표준약관관리</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
            <span>조직</span>
          </Link>
          <div className="subMenu">
            <div className=""></div>
            <ul>
              <li>
                <Link to="/">
                  <span>조직텍스트 </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>조직텍스트 </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>조직텍스트 </span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span>조직텍스트 </span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>유저등록</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/">
            <div className="">
              {/* 이미지 */}
              <span>환경설정</span>
            </div>
          </Link>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Navbar;
