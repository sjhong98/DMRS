<img width="812" alt="스크린샷 2023-12-01 오후 3 19 40" src="https://github.com/sjhong98/DMRS/assets/90092013/35bc4de2-b355-455b-89c9-45db99751004">

## 목차
1. [프로젝트 개요](#프로젝트개요)<br/>
2. [아이디어 소개](#아이디어소개)<br/>
3. [기능 소개](#기능소개)<br/>
4. [기술 스택](#기술스택)<br/>
5. [주요 기능 시연](#주요기능)<br/>
1). [로그인](#로그인)<br/>

<br /><br />

<a href='프로젝트개요' />

## 1. 프로젝트 개요

DMRS(DID Medical Record System)은 블록체인 기반 신원정보 체계 DID를 활용한 **진료기록 관리 시스템**입니다. <br />
환자는 원하는 범위 내에서 자신의 진료기록을 의사에게 제공할 수 있으며, 이를 통해 의사는 진료기록을 열람 및 수정할 수 있습니다. 

<br /><br />

## 2. 기술 스택

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/react native-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">

<br /><br />

## 3. 구조

<img width="450" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/37dcbf4b-81ff-4e2b-85bf-1cb4329e3d05">

<br/><br/>

### 환자 

#### 1) 모바일 회원가입 
: 카카오 소셜로그인 + 개인정보로 회원가입 시 DID 및 VpJwt 발급
#### 2) 진료기록 VP 발급
: 신원정보 VC + 진료기록이 존재하는 병원들의 VC들을 통합한 VpJwt를 발급 (진료기록 설정을 통해 제공할 병원 VC 선택 가능)
#### 3) QR 코드화
: 진료를 위해 병원 방문 시 발급 받은 VpJwt를 QR화하여 의사에게 제공
#### 4) 진료기록 VP 업데이트
: 진료 후 새로 발급된 VpJwt로 업데이트

<br /><br />

### 의사

#### 1) 웹 회원가입
: 웹에서 회원가입 시 의사로 분류
#### 2) QR 코드 스캔
: 환자가 모바일 앱으로 제공하는 QR코드를 스캔하여 환자의 VpJwt 확인
#### 3) 진료기록 추가
: VpJwt를 통해 환자 진료기록을 열람 및 추가
#### 4) 자신의 환자 진료기록 접근
: 진료 이후 DB에 저장된 자신의 환자 진료기록에 접근하여 열람 가능

<br /><br />

## 4. 기능 시현

## 환자

<a href='환자로그인' />

### 1) 로그인

<img width="300" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/b407fbd3-700a-4806-abf0-f9fdf6013574">

환자는 DMRS 모바일 앱을 통해 카카오 소셜로그인을 할 수 있습니다. 

<a href='환자QR코드생성' />

### 2) QR 코드 생성

<img width="300" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/308dcab4-7b5a-4455-8cc8-2c2ca4aace6f">

환자는 자신의 진료기록이 담긴 VpJwt를 QR 코드로 생성할 수 있고, 이를 의사에게 보여줌으로써 자신의 진료기록을 제공할 수 있습니다. 또한 정보 제공 설정을 통해 환자 스스로 어떤 병원의 정보를 제공할 것인지 범위를 선택할 수 있습니다.

<br /><br />

## 의사

<a href='환자QR코드생성' />

### 1) 로그인

<img width="820" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/bff13cc8-cb07-4d62-803f-5bf71d1c1421">

DMRS 웹을 통해 의사 로그인을 할 수 있습니다.

<a href='진료기록가져오기' />

### 2) 진료기록 가져오기

<img width="820" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/9c6e5812-03d9-435f-b6e8-998e8d760054">

의사가 DMRS 모바일 어플을 사용하여 환자의 QR코드를 스캔하면, 환자의 진료기록이 담겨진 vpJwt가 넘어오고, 특정 링크에 저장하게 됩니다.

이후 의사는 DMRS 웹에서 특정 링크를 통해 서버로부터 환자의 진료기록 vpJwt를 받아 열람할 수 있게 됩니다.

<a href='신규진료기록작성' />

### 3) 신규 진료기록 작성

<img width="820" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/a8527984-bd20-4893-85d4-04f20088d5df">

위의 과정을 통해 환자의 진료기록이 담겨진 vpJwt를 받아오게 되면, 신규 진료기록을 작성할 수 있게 됩니다. 진료기록을 작성하고 나면 병원 DB에 진료기록에 저장되며, 환자 vpJwt가 새롭게 갱신됩니다. 의사는 진료기록 열람 페이지로 이동하여 자신이 방금 작성한 진료기록을 열람할 수 있습니다.

<a href='기존진료기록열람' />

### 4) 기존 진료기록 열람

<img width="820" alt="DID 회원가입 시퀀스 다이어그램" src="https://github.com/sjhong98/DMRS/assets/90092013/47158222-bf50-4b83-b051-4824002c25ac">

의사는 자신이 작성한 진료기록을 병원 DB에 저장할 수 있으며, 환자 vpJwt를 거치지 않고서도 DB를 통하여 진료기록을 열람할 수 있습니다.










