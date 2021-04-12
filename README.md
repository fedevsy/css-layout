# 코멘토 직무부트 캠프
#### css 레이아웃 설계 연습을 통한 Float, Flex, Grid 집중분석

2021년 1월 26일을 시작으로 1주차부터 5주차까지 감귤멘토님의 강의 아래 공부한 내용들과 과제들을 기록하는 공간입니다.
이 repository에 작성되는 내용들은 html5과 css3에 대한 내용이 주를 이룹니다.


--------------------------------------------


## 1st_css_box_model
> 박스 모델에 대한 개념을 정리하고 display의 핵심 속성값을 이해합니다.          
> display:block / inline / inline-block에 대한 개념을 정리합니다.

### CSS 박스 모델이란?
문서의 레이아웃을 계산할 때, 브라우저의 렌더링 엔진은 표준 CSS 기본 박스 모델에 따라 각각의 요소를 사각형 박스로 표현하는데 이 CSS는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정합니다.

![크롬 개발자도구 > Element > Compute 탭에서 확인할수 있는 박스모델](/assets/images/box-model.png)

하나의 박스 모델 위 이미지처럼 상하좌우 영역으로 나어져 있으며 각 영역을 contents(파란색) 영역, padding(안쪽 여백, 초록색) 영역, border(테두리, 노란색) 영역, 그리고 margin(바깥 여백, 주황) 영역이라고 부릅니다.

content 영역의 경우 content의 너비값 x 높이값을 계산하여 영역이 정해지는데 이 때 해당 영역에 사용된 태그의 종류나 디스플레이 속성에 따라 기본적으로 width값이 정해져있는 경우가 있습니다.

<pre>
<code>

Q. 
width가 300px, height가 150px, margin과 padding이 각각 20px,
border가 5px일 때 컨텐츠의 전체 너비와 전체 높이는 몇 px인가?

A. 
전체너비
border-left + padding-left + content width + padding-right + border-right = ?px
5px + 20px + 300px + 20px + 5px = 350px

전체높이
border-top + padding-top + content height + padding-bottom + border-bottom = ?px
5px + 20px + 150px + 20px + 5px = 200px

</code>
</pre>

! css에서 box-sizing:border-box 속성을 지정하지 않으면 width나 height값을 계산할때 border 값을 포함하지 않기 때문 레이아웃이 깨질수 있으니 주의해야 합니다.



### 디스플레이 속성

display 속성이란 요소의 박스 모델의 타입\(유형\)을 설정하는 것으로 여러 유형들이 있지만 대표적으로 많이 사용되는 속성인 display:block, inline, inline-block을 많이 사용합니다. 아래 표는 디스플레이 속성별 의미간주요 태그들을 간단하 정리하였습니다.

| 값 | 의미 | 주요 태그  |
| :--- | :--- | :--- |
| block | HTML 태그 블록 요소의 속성을 가. | div, p, ul, ol 등.. |
| inline | HTML 태그가 인라인 요소의 속성을 가짐. | span, a, i 등.. |
| inline-block | HTML 태그가 인라인 요소와 블록 요소의 속성을 모두가짐. | input 등.. |
| 기 | table, table-cell, flex, grid 등.. | th, td 등.. |
| none | HTML 태그의 영역을 감춤. |  |


#### display:block 특징 

* 별도의 width 값을 지정하지 않으면 기본적으로 viewport 영역의 좌우 너비\(width:100%\)를 가집니다.
* 별도의 height 값을 지정하지 않으 0 \(auto\) 이며 블록 요소 안에 들어간 컨텐츠에 따라 가변적인 높이값을 가집니다.
* 블록 요소 안에 인라인 요소를 포함할 수 있습니다.
* height 값 지정 외에도 margin\(바깥 여백\), padding\(안쪽 여백\)을 지정하여 요소의 크기를 변형할 수 있습니다. 


#### display:inline 특징

* 별도로 width값 지정이 불가능하며 컨텐츠의 양만큼 너비가 자동으로 정해집니다.
* height도 마찬가지로 높이를 직접적으로 지정이 불가능하며 컨텐츠의 높이만큼 자동으로 정해집니다.
* 블록 요소안에 포함될수 있으며 여러개 배치시 수평으로 컨텐츠가 나열됩니다. ㅁ ㅁ ㅁ .....
* css를 이용하여 좌우 안쪽 여백값(padding)만 적용이 가능합니다.


#### display:inline-block 특징

* 블록 요소와 인라인 요소의 특징을 합친 형태로 블록요소처럼 width, height 값 지정이 가능합니다.
* margin\(바깥 여백\)과 padding\(안쪽 여백\) 또한 블록요소처럼 설정이 가능합니다.
* inline 요소처럼 수평으로 컨텐츠를 나열할 수 있습니다.

**그러면 inline-block을 사용할때 주의할 점은 없나?**
+ inline-block 끼리 붙어있으면 공백이 생기게 되는데, 이때는 상위 태그에 { font-size: 0; } 을 적용하면 해결이 됩니다.
+ 또한 inline-block 끼리 높이가 안맞을시에도 상위 공백이 생기는데, 이때는 { vertical-align: ---; } 값으로 정렬을 맞춰주시면 됩니다.

**inline-block은 block의 특성과 inline의 특성을 짬뽕시켜놓은 디스플레이 속성으로 디자인이 중요한 작업일 경우 inline-block을 지정하여 상하좌우 여백값을 블록요소처럼 설정해가면서 작업하면 됩니다.**


#### 컨텐츠 정렬방법

1. 수평 정렬방법

    1. 정렬하고자 하는 컨텐츠가 인라인 요소인가요?
    상위 블록 요소에 text-align:center를 적용해보세요. 다음과 같은 방법으로 인라인 요소를 블록 수준 상위 요소 내에서 가로로 가운데에 배치 할 수 있습니다. 이 방법은 인라인, 인라인 블록, 인라인 테이블, 인라인 플렉스 등에 대해 작동합니다.
    
    2. 정렬하고자 하는 컨텐츠가 블록 요소인가요?
    margin-left 나 margin-right를 적용하여 임의로 가운데로 정렬하거나 해당 요소에 너비값을 주고 margin을 0 auto 로 값을 주면 자동으로 부모 요소 너비와 관계없이 가운데 정렬이 됩니다.

    3. float된 요소 사이에 컨텐츠를 가운데에 배치할수 있나요?
    각 float 컨텐츠의 :before 영역에다 content:''; width:00px; height:00px 로 영역을 잡고
    넣고자 하는 요소를 position:absolute를 이용하여 가운데로 정렬합니다.
    자세한 내용은 https://css-tricks.com/float-center/ 를 참고해주세요.

    4. 정렬해야할 블록 요소가 2개 이상인가요?
        * 상위 요소에 *text-align:center* 와 하위 블록 요소에 *display:inline-block* 을 적용해보세요. 가운데 정렬이 잘됩니다.
        * flex를 이용하여 정렬할 수도 있습니다. 상위 요소에 *display:flex, justify-content:center*를 적용해보세요.

2. 수직 정렬방법

    1. 정렬하고자 하는 컨텐츠가 인라인 요소인가요?
        
        > 요소가 한 줄에 들어갈 경우
        padding을 사용하는 것이 아닌 line-height를 해당 요소의 height값과 동일하게 지정하면 수직 가운데 정렬이 됩니다.
        
        > 요소가 여러 줄에 들어갈 경우
        table td 는 기본적으로 vertical-align:middle 이 포함되어 있습니다.
        상위 요소에 display:table, 하위 요소에 display:table-cell 과 vertical-align:center로 수직 가운데 정렬이 됩니다.
    
    2. 정렬하고자 하는 컨텐츠가 블록 요소인가요?

        > 요소의 높이를 아는 경우
        부모 요소에 position:relative를 자식 요소에 position:absolute; top:50%를 사용하여 중간으로 내린후
        margin-top:-(컨텐츠의 높이값 / 2)을 지정하면 수직 가운데 정렬이 됩니다.

        > 요소의 높이를 모르는 경우
        부모 요소에 position:relative를 자식 요소에 position:absolute; top:50%를 사용하여 중간으로 내린후
        transform:translateY(-50%)를 지정하면 수직 가운데 정렬이 됩니다.

    3. float된 요소 사이에 컨텐츠를 가운데에 배치할수 있나요?
    각 float 컨텐츠의 :before 영역에다 content:''; width:00px; height:00px 로 영역을 잡고
    넣고자 하는 요소를 position:absolute를 이용하여 가운데로 정렬합니다.
    자세한 내용은 https://css-tricks.com/float-center/ 를 참고해주세요.

    4. 자식 요소의 높이값 변화와 관계없이 수직 정렬을 원한다면 부모 요소에 display:table 과 height 값을 자식 요소에 display:table-cell과 vertical-align:middle을 적용하면 부모 요소의 높이값에 영향을 주지 않고 수직 정렬할수 있습니다.

    5. flex 속성을 사용한다면 훨씬 간단합니다.
    부모 요소에 display: flex; flex-direction: column; justify-content: center를 적용해보세요.

3. 수평 및 수직정렬

    1. 요소의 너비와 높이를 알고 있을때
    부모 요소에 position:relative를 자식 요소에 position:absolute; left:50%; top:50%를 사용하여 중앙으로 배치한 후
    margin:-(컨텐츠의 총 높이값 / 2) 0 0 -(컨텐츠의 총 너비값 / 2)을 지정하면 수직 가운데 정렬이 됩니다.
    여기서 총 높이값과 총 너비값은 padding을 포함합니다.

    2. 요소의 너비와 높이를 알수 없을때
    부모 요소에 position:relative를 자식 요소에 position:absolute; left:50%; top:50%를 사용하여 중앙으로 배치한 후
    transform:translate(-50%, -50%)을 지정하면 수직 가운데 정렬이 됩니다.
    여기서 총 높이값과 총 너비값은 padding을 포함합니다.

    3. flex를 사용할 경우
    부모 요소에 flex와 함께 두가지 핵심 속성을 적용해야합니다.
    display: flex; justify-content: center; align-items: center;
    
    4. grid를 사용할 경우
    부모 요소에 display:grid; 및 height 값을 적용후 자식 요소에 margin:auto를 적용하면 수평 및 수직이 자동으로 정렬됩니다.