# RN에서 사용하는 태그(Native UI Components)
참고 : https://reactnative.dev/docs/components-and-apis

### View
- 웹에서의 `<div>` 태그와 유사한 역할을 합니다.
- 레이아웃과 스타일링을 위한 기본 컨테이너입니다.

### SafeAreaView
- iOS에서 노치 디자인이나 홈 인디케이터와 같은 시스템 UI 요소와 겹치지 않도록 안전한 영역을 제공하는 컴포넌트입니다.

### Text
- 웹에서의 `<span>` 또는 `<p>` 태그와 유사합니다. 텍스트를 표시하는데 사용됩니다.

### TextInput
- 웹에서의 `<input>` 태그와 유사하며, 사용자 입력을 받는데 사용됩니다.
- TextInput은 keybardType 속성을 사용하여 키보드 타입을 변경할 수 있으나, 지원되는 타입이 HTML의 input보다 제한적입니다.

### Button
- 웹에서의 `<Button>` 태그와 유사하며 아래와 같은 속성을 사용할 수 있습니다.
1. title: 버튼의 텍스트를 지정합니다.
2. onPress: 버튼이 클릭되었을 때 호출되는 이벤트 핸들러 함수를 지정합니다.
3. color: 버튼의 색상을 지정합니다 (플랫폼에 따라 지원되는 색상이 다를 수 있습니다).
4. disabled: 버튼을 비활성화하려면 true로 설정하고, 활성화하려면 false로 설정합니다. 기본값은 false입니다.

- <Button> 컴포넌트는 스타일링이 제한적이므로, 더 많은 스타일 옵션을 원하는 경우 `<TouchableOpacity>` 또는 `<TouchableHighlight>`와 같은 다른 컴포넌트를 사용하여 사용자 정의 버튼을 만들 수 있습니다.

### TouchableOpacity
- 버튼이나 링크와 같은 클릭 가능한 요소를 생성하는데 사용되며, 터치 시 투명도가 변경됩니다.

### Modal
- 오버레이 레이어 형태의 팝업 창을 표시하는데 사용됩니다.
  
### Slider 
- 사용자가 값을 드래그하여 선택할 수 있는 슬라이더를 표시하는데 사용됩니다.

### Switch 
- 사용자가 옵션을 켜고 끄는 스위치를 표시하는데 사용됩니다.

### Image
- 웹에서의 `<img>` 태그와 유사하며, 이미지를 표시하는데 사용됩니다.

### ScrollView
- 웹에서의 스크롤 가능한 영역을 나타내며, 컨텐츠가 화면보다 길 경우 스크롤할 수 있는 기능을 제공합니다.

### FlatList
- 웹에서의 `<ul>` 또는 `<ol>` 태그와 유사하게, 목록을 렌더링하는데 사용됩니다. 성능 최적화를 위해 뷰포트에만 보이는 항목만 렌더링됩니다.

### ActivityIndicator
- 웹에서의 로딩 스피너와 유사하게, 로딩 애니메이션을 표시하는데 사용됩니다.

