# 리액트 도움닫기 따라하기

+ [리액트 도움닫기](http://www.realhanbit.co.kr/books/87): 한빛 미디어에서 제공하는 Web Book

ES5든 ES6든 어떻게 사용해야할 지 잘 모르겠고... 뭐라도 하나 따라하면서 전체적인 과정을 경험해보면 알게되지 않을까해서 시작

## 리액트란 

+ SPA(Single Page Application, 단일 페이지 애플리케이션)의 인기
+ 다양한 SPA 프레임워크의 등장(앵귤러, 엠버, 백본 - 1세대 SPA 프레임워크)

리액트: 페이스북이 만든 라이브러리(2013 공개).  
리액트는 SPA 프레임워크가 아닌 **뷰(View) 라이브러리**이다.  
뷰는 브라우저 내 특정 컴포넌트를 보여주는 역할을 하기 때문에 리액트로 SPA개발이 가능하다.

> MVC패턴(Model - View - Controller Pattern)  
> [참고](http://www.bsidesoft.com/?p=5948)

### MVC

+ Model(모델) - 데이터.  
  - 추상화의 한가지 기법이다. 복잡한 실체를 필요한 만큼의 정보만 재구성한 추상 객체라 할 수 있다.
  - MV*패턴에서 모델은 애플리케이션 그 자체를 의미한다.(애플리케이션의 핵심)
  - 고전적인 모델링의 기본은 관계형 데이터베이스의 모델링이나 객체관계모델링
+ View(뷰) - 모델을 외부에 이쁘게 보여주는 역할과 외부의 입력을 받아들여 내부에 전파하는 역할  
  - UX/UI: 사용자에게 보여주고 사용자에게 입력 받는 인간공학의 영역. 다양한 디자인 요소를 도입해야하고, 애니메이션 같은 CPU 부하가 크게 걸리는 작업을 위한 다양한 기법이 동원된다.
  - 막대한 양: 작업량이 막대하다. 데이터를 다양한 형태로 가공해 보여주게 된다.(그래프, 대쉬보드, 리스트, 뷰, 수정....)

어떤한 앱이든 모델과 뷰가 필수적. 이 뷰와 모델 사이를 어떻게 연결하고 관리할 것인가에 따라 패턴 유형을 달리함

**MVC(모델뷰컨트롤러)**: Controller라는 객체를 중간 조정자로 둔다. 컨트롤러에게 많은 일을 맡기게 되어 컨트롤러가 굉장히 복잡해질 수 있다. 

그 외에 MVP(모델뷰프리젠터), MVVM(모델뷰뷰모델)가 있음

> **CRUD**
> 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말, 사용자 인터페이스가 갖추어야 할 기능(정보의 참조/검색/갱신)을 가리키는 용어로서도 사용된다.

#### 라우터(Router)

> 라우터 혹은 라우팅 기능을 갖는 공유기는 패킷의 위치를 추출하여, 그 위치에 대한 최적의 경로를 지정하며, 이 경로를 따라 데이터 패킷을 다음 장치로 전향시키는 장치이다  
> 서로 다른 네트워크 간에 중계 역할을 해준다.

> 둘 혹은 그 이상의 네트워크와 네트워크 간 데이터 전송을 위해 최적 경로를 설정해주며 데이터를 해당 경로를 따라 한 통신망에서 다른 통신망으로 통신할 수 있도록 도와주는 인터넷 접속 장비

MVC패턴에서 라우터는 중앙 집중적인 엔진을 통해 각 태스크를 수행하는데 필요한 컨트롤러를 활성화시키는(컨트롤러 사이의 연결과 컨트롤러를 초기화 해 줄) 일반적인 구현체라고 봐도 무방하다.

## 리액트의 장점

+ 유연한 리액트 생태계. 거의 모든 프레임워크와 서로 상호 교환 가능하다.
+ 간결한 API
+ 훌륭한 커뮤니티

한 번에 많은 테스크를 해결하려는 1세대 프레임워크에 비해, 복잡한 기능을 추가하기 전 뷰 레이어에 집중하여 개발할 수 있다.  

리액트는 뷰 레이어를 만드는 역할만 한다.  
뷰는 컴포넌트로서 다른 컴포넌트와 함께 계층 구조를 이룬다.  

리액트 생태계에서 여러 솔루션들이 서로 경쟁하면서 발전하고 있어, 개발 상황에 적합한 솔루션을 도입할 수 있다.(다른 기술과의 상호 교환)

---

## 2.3. 단방향 데이터 흐름

하향식, 단방향 데이터 흐름

모든 `state`는 항상 특정 컴포넌트가 가지며, 해당 `state`에서 파생된 모든 데이터 또는 UI는 트리의 컴포넌트 아래에만 영향을 미친다.

+ [MVC부터 MVVM, 단방향 데이터 흐름까지](https://speakerdeck.com/dalinaum/mvcbuteo-mvvm-danbanghyang-deiteo-heureumggaji)

## 2.4 클래스 메서드 바인딩

화살표 함수와 그냥 `function` 키워드 함수와는 `this` 결정 방식이 다르다고 알고 있는데  
예제에 코드가 중략되는 부분들이 있어서 좀 헷갈렸다;;  
(나중에 보면 또 헷갈릴까봐 적어둬야겠다;;)

일단 자바스크립트에서 `this`가 가리키는 것은 다음과 같다.

+ 화살표 함수의 `this`는 호출된 형태에 관계없이 정의된 곳에서 바로 바깥쪽 스코프에 존재하는 `this`와 같은 객체를 가리킨다.  
+ `function`키워드의 경우 어떤 객체의 메소드로 사용되냐에 따라 결정되고, 객체의 메소드로 호출하지 않고 그냥 함수처럼 사용하는 경우 전역객체를 가리킨다.(엄격모드에서는 `undefined`)

※ [리액트 공식문서 - Handling Events](https://reactjs.org/docs/handling-events.html)에서 3가지의 이벤트 핸들러가 클래스의 메소드가 되게하는 방법에 대한 설명 참고

그 전에,  
컴포넌트에 이벤트를 연결(바인딩)한다.  
이벤트 핸들러가 클래스의 메소드가 되게 한다.  

위 말은 둘 다 목적이 같다.(으아아아앙 헷갈려!!)

> 이벤트가 발생하게 되면, 이벤트 객체는 동적으로 생성되며, 이벤트를 처리할 수 있는 이벤트 리스너(event listener)들로 전달된다. DOM의 `Event` 인터페이스는 핸들러 함수로 접근할 수 있으며, 이벤트 객체는 첫번째 인자로만 전달된다.

ES6의 `class`를 사용해 component를 정의할 때의 일반적인 패턴은 이벤트 핸들러가 클래스의 메소드가 되도록 하는 것이다.

### 방법 1: `constructor`안에 프로퍼티로 메소드를 바인딩

JSX 콜백 안에서의 `this`의 의미에 주의해야한다!!  
자바스크립트에서 클래스 메소드는 `this`를 자동으로 bind 해주지 않는다.  

※ 클래스 메소드는 ES5로 하면 다음과 같음
```js
onTest: function() {
  console.log(this)l
}
```
만약 `this.onTest`를 바인딩하고 `onClick`에 전달하는 것을 잊어버린다면, 실제로 함수가 호출 될 때 `this`는 `undefined`가 될 것이다.  
(※ 클래스 안에서는 엄격모드로 동작한다.)
```js
class App extends Component {
  constructor(props) {
    // (중략)...

    // 이벤트를 바인드하는 부분
    // 콜백에서 `this`가 원하는대로 동작하게 하고 싶다면 이 바인딩을 꼭 해줘야한다. 
    this.onTest = this.onTest.bind(this);
  }
  onTest(){
    console.log(this); // APP {...}
    // 생성자에 바인딩하지 않았다면 이것은 undefined를 가리킨다.
  }
  render() {
    return (
      <div className="APP">
        // 중략...
        <button 
          onClick={this.onTest}
          type="button"
        >dismiss</button>
      </div>
    );
  }
}
```

### 방법 2: 클래스 필드 문법을 사용하는 방법(화살표 함수)

클래스 필드는 인스턴스 객체에 저장된다.(생성자에 프로퍼티를 정의한 것처럼 된다.)
화살표 함수의 `this`는 호출형태에 관계없이 항상 인스턴스 객체를 가리킨다.
```js
class App extends Component {
  constructor(props) {
    // (중략)...

    // 이것과 같음
    // this.onTest = () => {
    //   console.log(this);
    // }
  }
  onTest = () => {
    console.log(this); // APP {...}  
  }
  render() {
    return (
      <div className="APP">
        // 중략...
        <button 
          onClick={this.onTest}
          type="button"
        >dismiss</button>
      </div>
    );
  }
}
```

### 방법 3: 콜백에 화살표 함수를 사용하는 방법

```js
class App extends Component {
  constructor(props) {
    // (중략)...
  }
  onTest() {
    console.log(this); // APP {...}  
  }
  render() {
    return (
      <div className="APP">
        // 중략...
        <button 
          onClick={() => this.onTest()}
          type="button"
        >dismiss</button>
      </div>
    );
  }
}
```
이 방법은 App이 렌더될 때마다(`render()`메소드가 실행될 때마다) 다른 콜백을 생성한다는 문제가 있다. 그러나 대부분의 경우에는 괜찮다고 한다.

이벤트 핸들러에 인수를 전달하려면 3번의 방법을 쓰게 된다. 또는 다음과 같은 방법이 있다.
```js
// 3번의 콜백에 화살표 함수를 전달하는 방법
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

// this를 바인드하면서 인수를 전달하는 방법
// ※ bind는 call, apply처럼 함수를 실행하지 않고 함수를 반환한다
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

## 2.6 폼과 이벤트

+ 목표: 검색어를 입력할 때마다 리스트를 필터링해야한다. - 입력 필드 값이 컴포넌트 내부 상태 값에 저장되어야한다.
+ 방법: 리액트의 [통합적 이벤트(synthetic event)](https://reactjs.org/docs/events.html)를 사용해 이벤트 페이로드에 접근한다.

> [페이로드](https://ko.wikipedia.org/wiki/%ED%8E%98%EC%9D%B4%EB%A1%9C%EB%93%9C)  
사용에 있어서 전송되는 데이터를 뜻한다. 페이로드는 전송의 근본적인 목적이 되는 데이터의 일부분으로 그 데이터와 함께 전송되는 헤더와 메타데이터와 같은 데이터는 제외한다.  
프로그래밍에서 주로 메시지 프로토콜(message protocols) 중에 프로토콜 오버헤드(protocol overhead)와 원하는 데이터를 구별할 때 사용된다. 예를 들어 웹 서비스 응답(web service response)이 아래의 JSON이라 하면:
> ```json
> {
>     "status":"OK",
>     "data": {
>         "message":"Hello, world!"
>     }
> }
> ```
> 여기서 "Hello, world!"가 클라이언트가 관심을 가지는 페이로드이다. 나머지 부분은, 중요하긴 하지만, 프로토콜 오버헤드이다.


## 2.7 ES6 구조해제(Destructuring)

Destructuring(구조해제, 비구조화)으로 객체와 프로퍼티에 쉽게 접근할 수 있다.

ES5
```js
var user = {
  firstname: 'Robin',
  lastname: 'Wieruch'
};

var firstname = user.firstname;
var lastname = user.lastname;

console.log(firstname + ' ' + lastname); // Robin Wieruch 
```

ES6
```js
const user = {
  firstname: 'Robin',
  lastname: 'Wieruch'
};

const {firstname, lastname} = user;

console.log(`${firstname} ${lastname}`);
```
```js
// 가독성을 위해 객체를 해제할 때 각 객체 프로퍼티마다 줄을 바꿔주기도
const {
  firstname, 
  lastname
} = user;
```

## 2.8 제어되는 컴포넌트

단방향 데이터 흐름: 
  - 입력 필드는 (리스트를 필터링하기 위해) `searchTerm`로 state를 업데이트 한다.
  - state가 변경되면 `render()`메서드가 재실행된다.
  - `searchTerm`에 검색어가 있는지 리스트에서 확인 후 필터링한다.


`<input>`,`<textarea>`,`<select>`와 같은 폼 엘리먼트는 HTML로 자신의 상태를 가지고 유저 입력에 따라 업데이트 된다. 이는 리액트에서 제어되지 않은 컴포넌트라 부른다.

리액트에서 이런 제어되지 않은 컴포넌트(Uncontrolled component)를 제어되는 컴포넌트(controlled component)로 만들어야한다.

리액트 컴포넌트는 초기화 시점 뿐만 아니라, 어떤 시점이라도 반드시 뷰의 state를 나타내야 한다.

```js
// 중략
return (
  <div className="APP">
    <form>
      <input 
        type="text"
        // 입력 필드 값에 searchTerm 상태 프로퍼티 값을 기본 값으로 설정한다.
        // 이제 입력필드도 단방향 데이터 흐름 규칙이 적용되었다.
        value={searchTerm}
        onChange={this.onSearchChange}
      />
    </form>
    // 내부 컨포넌트 상태는 입력필드로부터 단방향 데이터 흐름을 받는다.
    {list.filter(inSearched(searchTerm)).map(item => 
      <div key={item.objectID}>
        <span><a href={item.url}>{item.title}</a></span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <button 
          onClick={() => this.onDismiss(item.objectID)} 
          type="button"
        >dismiss</button>
      </div>
    )}
```

