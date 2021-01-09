# React Router 

## SPA

Single Page Application 으로, 한 개의 페이지로 이루어진 애플리케이션이란 의미이다.
리액트의 라우팅 라이브러리는 리액트 라우터, 리치 라우터, Next.js 등이 있다. 그중에서 리액트 라우터가 가장 오래되고 사용 빈도가 높다.

## URL 파라미터

Route에서 path 설정시 :를 붙이면 파라미터로 인식한다.
```
<Route path="/user/:username">
    <User />
</Route>
```
useParams hook을 이용해서 파라미터 값을 받으면 된다.
```js
const {username} = useParams();
```

## URL 쿼리

쿼리는 useLocation Hook을 사용해서 받으면 된다. 

url이 /about/detail=detailVal 이라고 한다면 
```js
let query = new URLSearchParams(useLocation().search);
let detail = query.get('detail');
//detail === "detailVal"
```

## History

history 객체는 컴포넌트 내에 구현하는 메서드에서 라우터 API를 호출할 수 있다. 함수형 컴포넌트에서는 useHistory hook을 이용하면 된다. 
```js
const history = useHistory();

const handleGoBack = () => {
    history.goBack();
}

const handleGoHome = () => {
    history.push('/');
}
    
```