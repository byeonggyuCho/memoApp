# Memo App

## spec
- typescript 
- react 
- redux
- reudx-saga


## todo
- 컴포넌트 설계 분석
- 더 나은 구조는 어떤 구조인가?
- 리랜더링을 최소화하기 위해선???
- 라우터 구조분석


## ref
- [기본환경 셋팅](http://jeonghwan-kim.github.io/dev/2019/06/25/react-ts.html)
- [라우터](http://jeonghwan-kim.github.io/dev/2019/07/08/react-router-ts.html)
- [](http://jeonghwan-kim.github.io/dev/2019/07/15/react-redux-ts.html)



## 사용 라이브러리

1. redux
    - 상태관리 라이브러리
    - 왜 상태관리 라이브러리를 썼는지?
    - 다른 선택지가 있을텐데 왜 redux를??
    - 다른 상태관리 라이브러리와 기능적 차이점은 알고 있는지?

2. react-redux
    - redux와 react 컴포넌트를 연결시키는 역할.

3. redux-devtools-extention
    - redux 개발 도구

4. webapck
    - transpiler

4. webpack-dev-servers
    - 정적파일 생성 자동화
    - hot module
    - 

5. typesecipt
    - 정적타입 체크

6. React-router-dom
    - 프론트 라우팅
    - 프론트 라우팅을 하는 이유가 뭐임?
        - 서버사이드에서 하는것보다 경제적임.
        - 라우트의 자세한 과정을 아는지?? 

7. react-router
    - 무슨 역할..?

8. hooks
    - 왜 hooks를 썼는지?

## 컴포넌트 설계
- 리랜더링을 최소화하는 구조..
- 왜 이렇게 컴포넌트를 분할했나?
- 어떻게 해야하는가?
- 이런식의 접근이 가능할텐데 생각해본적 없는지? 아니면 지금의 설계의 특별한 이유가 있는지?
- 이런 구조에서 발생하는 문제에 대해서 어떻게 대처할 것인지?


## 비동기 처리
- 세션처리는?
- 요청중인 비동기처리를 취소해야할 떄는?



## 폴더구성

### actions
액션 타입과 이를 포함한 액션 객체를 생성하는 액션 생성함수 정의

### reducers
스토어 타입과 초기값을 설정해서 스토어 구조를 만든다. 액션에 따라 스토어를 갱신하는 리듀서를 정의한다.

### store
리듀서를 가져와 스토어를 만든다. 스토어는 루트 컴포넌트에 주입되는데 프로바이더 컴포넌트를 이용한다.

### constainer
액션 생성자 디스패처와 스토어가 연결된 컴포넌트를 만든다. 행동을 기술한 컴포넌트

### pages
컨테이너에 의해 전달받은 데이터를 출력한다. 상황에 따라 재활용하는 공통 컴포넌트는 compoenents에 넣기도 한다. 





## Typescript 적용범위

### 1. Presetainal Component
- props
- state


### 2. Container Compoennt
- store 접근시 RootState에 존재하는 값인지 체크.


### 3.Actions
- Reqeust payload Type


### 4.Reducers
- initState
- rootSate 정의


### 5.saga
