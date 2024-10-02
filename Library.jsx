//리액트 컴포넌트 만드는 과정
//1. React 컴포넌트 불러오기(import)
import React from "react";
//Book 컴포넌트를 불러와서 사용하기
import Book from "./Book";

//2. 컴포넌트 함수 또는 클래스 정의->파일이름(반드시 대문자로 파일이름 지정함)과 동일하게 한다.
function Library(props){
    return (
        <div>
            <Book name = "처음 만난 리액트" numOfPage={300} />
            <Book name = "처음 만난 파이썬" numOfPage={400} />
            <Book name = "처음 만난 AWS" numOfPage={500} />
        </div>
    )
}


//3. 컴포넌트 내보내기 

export default Library;