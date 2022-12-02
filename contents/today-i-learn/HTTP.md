---
date: '2022-12-01'
title: '[TIL]HTTP'
categories: ['Web', 'Javascript', 'HTTP', 'HTTP Messages']
summary: 'HTTP와 HTTP Messages?'
thumbnail: './HTTP.png'
---

### HTTP (HyperText Transfer Protocol)

HTML과 같은 문서를 전송하기 위한 Protocol이다. HTTP는 웹 서버의 소통을 위해 디자인 되었다.

HTTP messages

클라이언트와 서버 사이에서 데이터가 교환되는 방식이다. HTTP Messages에는 다음과 같이 두 가지 유형이 있다.

- 요청(Requests)
- 응답(Responses)

HTTP Messages는 몇 줄의 텍스트 정보로 구성되고 구성 파일, API, 기타 인터페이스에서 HTTP Messages를 자동으로 완성한다.

요청(Requests)과 응답(Responses)은 다음과 같은 구조를 가진다.

![HTTPImg1.png](HTTPImg1.png)

### HTTP Requests

### start line

HTTP Requests는 클라이언트가 서버에게 보내는 메시지다. start line에는 세가지 종류가 있다.

1. 수행할 작업(GET, PUT, POST)이나 방식(HEAD or OPTION)을 설명하는 HTTP method를 나타낸다. 예를 들어 GET method는 리소스를 받아야 하고, POST method는 데이터를 서버로 전송한다.
2. 요청 대상(일반적으로 URL이나 URI) 또는 프로토콜, 포트, 도메인의 절대 경로는 요청 컨텍스트에 작성된다. 이 요청 형식은 HTTP Messages 마다 다르다.
   - origin 형식: ‘?’와 쿼리 문자열이 붙는 절대 경로이다. GET, POST, HEAD, OPTIONS 등의 method와 함께 사용된다.
     `POST / HTTP 1.1`
     `GET /background.png HTTP/1.1`
     `HEAD /test.html?query=alibaba HTTP/1.1`
     `OPTIONS /anypage.html HTTP/1.0`
   - absolute 형식: 완전한 URL형식으로, 프록시에 연결하는 경우 대부분 GET method와 함께 사용한다.
     `GET [http://developer.mozilla.org/en-US/docs/web/HTTP/Messages](http://developer.mozilla.org/en-US/docs/web/HTTP/Messages) HTTP/1.1`
   - authority 형식: 도메인 이름과 포트 번호로 이루워진 URL의 일부분이다. HTTP 터널을 구축하는 경우, CONNECT와 함께 사용할 수 있다.
     HTTP 터널 구축? CONNECT?
     `CONNECT [developer.mozilla.org:80](http://developer.mozilla.org:80) HTTP/1.1`
   - asterisk형식: OPTIONS와 함께 별표(\*)하나로 서버 전체를 표현한다.
     `OPTIONS * HTTP/1.1`
3. HTTP 버전에 따라 HTTP message의 구조가 달라진다. 따라서 start line에 HTTP버전을 함께 입력한다.

### Headers

요청의 Headers는 기본 구조를 따른다. 헤더 이름(대소문자 구분이 없는 문자열), 콜론(:), 값을 입력한다.

- General headers: 메시지 전체에 적용되며 body를 통해 전송되는 데이터와는 관련이 없는 헤더이다.
- Request headers: fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더를 의미한다. User-Agent, Accept-Type, Accept-Language와 같은 헤더는 요청을 보다 구체화한다. Referer처럼 컨텍스트를 제공하거나 If-None과 같이 조건에 따라 제약을 추가할 수 있다.
- Representation headers: 이전에는 Entity headers로 불렸으며, body에 담긴 리소스의 정보(콘텐츠 길이, MIME 타입 등)를 포함하는 헤더다.

### Body

GET, HEAD, DELEETE, OPTIONS처럼 서버에 리소스를 요청하는 경우에는 본문을 작성하지 않는다. POST나 PUT과 같은 일부 요청은 데이터를 업데이트하기위해 사용된다.

- single-resource bodies(단일-리소스 본문): 헤더 두 개(Content-Type과 Content-Length)로 정의된 단일 파일로 구성된다.
- Multiple-resource bodies(다중-리소스 본문): 여러 파트로 구성된 본문에서는 각 파트별로 다른 정보를 지닌다. 보통 HTML form과 관련이 있다.

### HTTP Responses

### status line

HTTP Responses는 서버가 클라이언트에게 보내는 메시지이다. 응답의 첫번째 줄을 status line이라고 부르며, 다음의 정보를 포함한다.

1. 현재 프로토콜 버전(HTTP/1.1)
2. 상태 코드 - 요청의 결과를 나타낸다. (ex. 200, 302, 404 등)
3. 상태 텍스트 - 상태 코드에 대한 설명

### Headers

응답에 들어가는 HTTP headers는 요청 헤더와 동일한 구조를 가지고 있다.

대소문자 구분없는 문자열, 콜론(:), 값을 입력한다. 값은 헤더에 따라 다르다.

- General headers : 메시지 전체에 적용되는 헤더로, body를 통해 전송되는 데이터와는 관련이 없는 헤더
- Response headers : 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더로, Vary, Accept-Ranges와 같이 상태 줄에 넣기에는 공간이 부족했던 추가 정보를 제공한다.
- Representation headers : 이전에는 Entity headers로 불렀으며, body에 담긴 리소스의 정보(콘텐츠 길이, MIME 타입 등)를 포함하는 헤더입니다.

### Body

응답의 본문은 HTTP messages 구조의 마지막에 위치한다. 모든 응답에 body가 필요한 것은 아니다. 201, 204와 같은 상태 코드를 가지는 응답에는 본문이 필요하지 않다.

- Single-resource bodies(단일-리소스 본문)
  - 길이가 알려진 단일-리소스 본문은 두 개의 헤더(Content-Type, Content-Length)로 정의한다.
  - 길이를 모르는 단일 파일로 구성된 단일-리소스 본문은 Transfer-Encoding이 `chunked` 로 설정되어 있으며, 파일은 chunk로 나뉘어 인코딩 되어있다.
- Multiple-resource bodies(다중-리소스 본문):
  - 서로 다른 정보를 담고있는 body이다.
