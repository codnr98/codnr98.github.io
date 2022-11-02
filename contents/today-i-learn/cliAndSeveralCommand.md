---
date: '2022-11-02'
title: '[TIL]CLI와 몇가지 Command'
categories: ['CLI', 'terminal', 'terminal command']
summary: 'CLI와 몇가지 command들에 대하여'
thumbnail: './cliAndSeveralCommand.png'
---

# CLI와 몇가지 Command

## CLI (Command Line Interface) 터미널

키보드로 입력하고 모니터로 출력받으면서 컴퓨터와 소통하는 수단이다. 다만 오직 커맨드로만 이루워진 입출력으로 인해 다소 낯설게 느껴질 수 있다.

CLI는 왜 필요한 걸까?

데이터 센터에는 서버컴퓨터가 최소 5만개 정도가 있다 그많은 컴퓨터에 모니터, 마우스, 키보드를 달아줄 수 없는 노릇이였다 그래서 개발자들은 CLI를 통해 서버컴퓨터에 접근한다.

### 프롬프트 (Prompt)

사용자가 키보드를 통해 명령어를 입력할 수 있는 한줄의 공간이다.

### 자주 사용하는 Command

`pwd` (print working directory): 현재 위치를 확인할 수 있는 명령어

`mkdir` (make directory): directory를 만들어주는 명령어

`touch`: 파일을 만들어주는 명령어

`cat`: 파일 내용을 CLI에 출력한다.

`rm`: 폴더나 파일을 삭제한다.

명령어 `rm`단일로는 폴더를 삭제할 수 없다. `rm`으로 폴더를 삭제하려면 옵션 `-rf`를 사용해야된다. 여기서 옵션 r은 “recursive”를 뜻하고, 옵션 `f`는 “force”를 의미한다. `r`은 폴더를 지울때 사용하는 옵션 `f`는 질문을 받지않고 지울 때 사용하는 옵션이다.

`mv`: 폴더나 파일을 옮기거나 이름을 변경할 수 있다.

명령어 `mv` 는 위치이동 기능 뿐만 아니라 이름변경의 기능도 가지고 있다. **파일을 옮겨줄 폴더이름 대신 변경할 파일이름을 작성하면** 원하고자 하는 파일이름으로 변경할 수 있다.
