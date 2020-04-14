# Memo App


## debug
- 메모 추가 로직에서 dialog가 뜨지 않는다.
    - dialog위치를 수정해야한다. 어디서 렌더링해야할까????
- toast가 안나옴..
- 실패시 실패 알림 띄우기.
- 폴더 구조 정리...
    - page와 container component

## feat
- 수정버튼 만들기
- indexDB를 사용해서 서버리스 환경으로 만들어보기
- 메모 수정로직...


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
    - [참고](https://velopert.com/3417)


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

    - 타입스크립트를 적용할때 문제가 될 수 있는 부분은 뭐라고 생각하나?
        1. 코드 복잡도 증가할 수 있다.
            - 타입스크립트 문법이 어색할 경우 코드가 한눈에 읽히지 않을 수 있다.
        2. 서브파티 라이브러리 호환성 
            - 비인기 라이브러리의 type호환여부.
        - 비동기 로직에 미들웨어를 연동해야할때 처리가 복잡해짐
        - 데이터에 대한 처리 주도권을 상태관리라이브러리가 가지고 있는것이 구조적으로 얻는 이점이 있음
        - 컴포넌트는 비지니스 로직에서 분리되는 것이 유지보수에 유리하다. 비지니스 로직이 수정된 경우에 일일이 수정을 해야하기 때문이다. 
        - 이런 이유로 비지니스 로직을 redux 미들웨어에서 처리해서 로직을 컴포넌트로 부터 분리시키는것이 좋다.  
        - 비동기호출은 사이드이펙트다. 사이드 이펙트를 컴포넌트로 부터 분리해서 한곳에 모아서 관리하는 것이 좋다.  
        - 컴포넌트에 정의된 비지니스로직을 재활용하기 어렵다. 
        - 비지니스 로직이 결합된 컴포넌트는 테스트가 어렵다.

6. React-router-dom
    - 프론트 라우팅
    - 프론트 라우팅을 하는 이유가 뭐임?
        - 서버사이드에서 하는것보다 경제적임.
        - 라우트의 자세한 과정을 아는지?? 

7. react-router
    - 무슨 역할..?

8. hooks
    - 왜 hooks를 썼는지?
    1. store에 dispatch하는것을 명시적으로 표현하는것이 더 낫다고 생각한다.
    2. 선언적프로그래밍의 가독성과 재활용성

    - hooks에서 componentDidMout와 componentWillMount를 구분해야할떄 어떻게 해야하나?????


9. redux-saga
    - 사이드 이펙트를 더 쉽게 관리하고 더 효과적으로 실행하며 더 쉽게 테스트하고 더 나은 에러처리를 할 수 있게 만드는 것이 목표
    - 컴포넌트가 action을 발행하면 saga가 비동기로직을 처리하여 store에 disaptch를 함.
    - action에 대한 리스너를 등록하고 비동기로직을 처리하는 미들웨어라고 생각하면 될듯.


## 컴포넌트 설계
- [참고: 컴포넌트의 역할분리](https://jeonghwan-kim.github.io/dev/2020/01/28/component-design.html)

- 리랜더링을 최소화하는 구조..
- 왜 이렇게 컴포넌트를 분할했나?
- 어떻게 해야하는가?
- 이런식의 접근이 가능할텐데 생각해본적 없는지? 아니면 지금의 설계의 특별한 이유가 있는지?
- 이런 구조에서 발생하는 문제에 대해서 어떻게 대처할 것인지?


## 비동기 처리
- 세션처리는?
- 요청중인 비동기처리를 취소해야할 떄는?
- 비동기처리를 Redux 미들웨어에서 하지않고 컴포넌트에서 처리했을때 뭐가 문제라고 생각하나?
    - 컴포넌트의 복잡도가 증가한다.
    - 비지니스로직이 컴포넌트마다 분산됨으로 관리가 어려워진다. 

- 비동기처리를 Redux 미들웨어에서 하는 가장 큰 이유가 뭐라고 생각하나?




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
