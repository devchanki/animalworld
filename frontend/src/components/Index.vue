<template lang="html">
  <div class="index">
    <div class="moon">
      <img src="../assets/images/moon.png">
    </div>
    <div class="cloud" id="c1">
      <img src="../assets/images/cloud.png">
    </div>
    <div class="cloud" id="c2">
      <img src="../assets/images/cloud.png">
    </div>
    <div class="cloud" id="c3">
      <img src="../assets/images/cloud.png">
    </div>
    <div class="cloud" id="c4">
      <img src="../assets/images/cloud.png">
    </div>
    <div class="cloud" id="c5">
      <img src="../assets/images/cloud.png">
    </div>
    <div class="language-select-button">
      <button type="button" name="button" id="korean" @click="clickButton(0)"></button>
      <button type="button" name="button" id="english" @click="clickButton(1)"></button>
      <button type="button" name="button" id="close" @click="foldButton"></button>
    </div>
    <div id="fullpage">
      <div class="section">
        <div class="main">
          <div class="main-subtitle" v-if="currentLanguage === 0">
            당신만을 위한 해커톤
          </div>
          <div class="main-subtitle-eng" v-else>
            The hackathon only for You
          </div>
          <div class="main-line"></div>
          <div class="main-title" v-if="currentLanguage === 0">
            동물의 나라.
          </div>
          <div class="main-title" v-else>
            Animal World.
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="main-description" v-if="currentLanguage === 0">
            <font>동물의 나라</font>는 지금은 잃어버린, 어릴 적 느끼던 순수한
          </div>
          <div class="main-description" v-else>
            <font>The Animal World</font> is an event which brings
          </div>
          <div class="main-description" v-if="currentLanguage === 0">
            <font>창작의 기쁨</font>을 우리 자신에게 돌려주고자 기획된 이벤트입니다.
          </div>
          <div class="main-description" v-else>
            back ourselves the pure <font>pleasure of creation</font>
          </div>
          <div class="step-container">
            <div class="step">
              <div class="step-circle" id="together"></div>
              <div class="step-description" v-if="currentLanguage === 0">
                주말저녁에 모여서
              </div>
              <div class="step-description" v-else>
                Meet at weekend evening
              </div>
            </div>
            <div class="step">
              <div class="step-circle" id="make"></div>
              <div class="step-description" v-if="currentLanguage === 0">
                만들고 싶은것을 만들고
              </div>
              <div class="step-description" v-else>
                Make what we want
                <br class="step-description-br"><br>
              </div>
            </div>
            <div class="step">
              <div class="step-circle" id="presentation"></div>
              <div class="step-description" v-if="currentLanguage === 0">
                발표 !
              </div>
              <div class="step-description" v-else>
                Show up!
                <br class="step-description-br"><br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="prize-img">
            <img src="../assets/images/prize.png" alt="">
          </div>
          <div class="prize-description" v-if="currentLanguage === 0">
            <font>가장 창작을 즐긴 사람과, 가장 가치 있는 것을 만든 사람이 우승 !</font>
          </div>
          <div class="prize-description" v-else>
            <font>The winner is two. one is most enjoyed pleasure of creation, <br class="prize-description-br"/>
                  Another is the team who created the most valuable thing.</font>
          </div>
          <div class="prize-description" v-if="currentLanguage === 0">
            해커톤이지만, 창작활동이면 무엇이든 상관 없습니다 !
          </div>
          <div class="prize-description" v-else>
            We said this is the hackathon, (But we want all kind of creative activity!) But whatever creative activity is okay.
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="question" v-if="currentLanguage === 0">
            <font>Q.</font> 우승 상금은 얼마인가요?
          </div>
          <div class="question" v-else>
            <font>Q.</font> How much is the prize money?
          </div>

          <div class="answer" v-if="currentLanguage === 0">
            <font>없습니다.</font>
          </div>
          <div class="answer" v-else>
            <font>Nothing.</font>
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            대회는 처음부터 자기 자신에게 만드는 것의 즐거움을 주기 위한 대회입니다. <br class="br-ignore"/>
            그러므로 이곳에선 당신에게 어떤 상품도 제공하지 않습니다.
          </div>
          <div class="answer" v-else>
            From the first time, this hackathon is the event to give us the pleasure of creation. <br class="br-ignore"/>
            So The event doesn't give you any kind of prize.
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            <font>때문에</font>,
          </div>
          <div class="answer" v-else>
            <font>Therefore</font>,
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            1. 참가자, 대회를 포함한 누구도 당신에게 요구하지 않습니다.
          </div>
          <div class="answer" v-else>
            1. Include promoter, nobody requires to you.
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            2. 자신이 만족할 수 있는 것이 무엇인지 집중할 수 있습니다.
          </div>
          <div class="answer" v-else>
            2. You can concentrate creation which make you were satisfied.
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            3. 누구도 당신의 아이디어를 부정하거나 비판하지 않습니다.
          </div>
          <div class="answer" v-else>
            3. nobody judges or criticize your Idea.
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            굳이 이야기하면 사람들의 박수, 행사가 끝날 때 쯤 느끼는 보람, 경험, 팀원, 그리고 손에 들린 작품이겠죠 : )
          </div>
          <div class="answer" v-else>
            But you still wonder what is the prize,<br>
            the answer is crowd's crapping, a pleasure of accomplishment, experience, teammate, and the creature which you made. :)
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="question" v-if="currentLanguage === 0">
            <font>Q.</font> 대회는 어떻게 진행되죠?
          </div>
          <div class="question" v-else>
            <font>Q.</font> How to join this hackathon?
          </div>
          <div class="competition">
            <div class="competition-step">
              <div class="competition-img" id="step1"></div>
              <div class="competition-img-tint"></div>
              <div class="competition-step-title" v-if="currentLanguage === 0">
                아이디어 등록 & 참가 신청
              </div>
              <div class="competition-step-title" v-else>
                Post idea & Join the team
              </div>
              <div class="competition-step-description" v-if="currentLanguage === 0">
                자신의 아이디어를 올리거나, 참가할 아이디어 선택 후 자신의 역할(동물)을 정합니다.
              </div>
              <div class="competition-step-description" v-else>
                Posting your idea, choose other team's idea which you want,
                and choose your role(animal)
              </div>
            </div>
            <div class="competition-step">
              <div class="competition-img" id="step2"></div>
              <div class="competition-img-tint"></div>
              <div class="competition-step-title" v-if="currentLanguage === 0">
                행사 참가 & 제작
              </div>
              <div class="competition-step-title" v-else>
                Attend event & Create
              </div>
              <div class="competition-step-description" v-if="currentLanguage === 0">
                행사날 혼자, 혹은 팀과 열심히 만듭니다. 혼자도 좋지만, 팀을 짜는 것을 추천합니다!
              </div>
              <div class="competition-step-description" v-else>
                Attending the event, and create what you want.
              </div>
            </div>
            <div class="competition-step">
              <div class="competition-img" id="step3"></div>
              <div class="competition-img-tint"></div>
              <div class="competition-step-title" v-if="currentLanguage === 0">
                발표 & 투표
              </div>
              <div class="competition-step-title" v-else>
                Show up & Vote
              </div>
              <div class="competition-step-description" v-if="currentLanguage === 0">
                제작한 결과를 발표합니다. 투표는 자신에게 좋다고 생각하는 작품을 만든 팀과 가장 즐겁게 제작한 팀에게 한 표씩 투표하면 됩니다.
              </div>
              <div class="competition-step-description" v-else>
                Show up what you made.
                after show up, you should vote for two teams.
                one is most enjoyed pleasure of creation,
                Another is the team who created the most valuable thing.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="question" v-if="currentLanguage === 0">
            <font>Q.</font> 선택할 수 있는 동물은 어떤 것이 있나요?
          </div>
          <div class="question" v-else>
            <font>Q.</font> What kind of animal that I can choose?
          </div>
          <div class="animal-role-container">
            <div class="animal-role">
              <div class="animal-title">
                <div class="animal-img">
                  <img src="../assets/images/lion.png" alt="">
                </div>
                <div class="animal-text" v-if="currentLanguage === 0">
                  사자
                </div>
                <div class="animal-text" v-else>
                  Lion
                </div>
              </div>
              <div class="animal-contents">
                <div class="animal-description" v-if="currentLanguage === 0">
                  모든 동물 중 사자만 팀을 만드는 것이 가능합니다.
                </div>
                <div class="animal-description" v-else>
                  Only Lion can make own group.
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  사자만 다른 동물들의 신분을 조회할 수 있습니다.
                </div>
                <div class="animal-description" v-else>
                  that's why the only lion can see other animal's ID card
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  다른 무리에 소속된 동물의 신분 조회/팀 가입 제의는 불가합니다.
                </div>
                <div class="animal-description" v-else>
                  But Even Lion can't try to see ID card of the animal which already joined other's group
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  사자가 없어진 무리는 자동 해체됩니다.
                </div>
                <div class="animal-description" v-else>
                  the group without lion will be dispersed.
                </div>
              </div>
            </div>
            <div class="animal-role">
              <div class="animal-title">
                <div class="animal-img">
                  <img src="../assets/images/vulture.png" alt="">
                </div>
                <div class="animal-text" v-if="currentLanguage === 0">
                  독수리
                </div>
                <div class="animal-text" v-else>
                  Eagle
                </div>
              </div>
              <div class="animal-contents">
                <div class="animal-description" v-if="currentLanguage === 0">
                  독수리는 가장 강력한 변수를 만들어내는 동물입니다.
                </div>
                <div class="animal-description" v-else>
                  Eagle can make the biggest variable
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  독수리는 밤이 되면 사냥을 통해 다른 팀 멤버 1명을 데려올 수 있습니다
                </div>
                <div class="animal-description" v-else>
                  Only eagle can take the other team member through the hunting.
                  when night comes.
                </div>
              </div>
            </div>
            <div class="animal-role">
              <div class="animal-title">
                <div class="animal-img">
                  <img src="../assets/images/wolf.png" alt="">
                </div>
                <div class="animal-text" v-if="currentLanguage === 0">
                  늑대
                </div>
                <div class="animal-text" v-else>
                  Wolf
                </div>
              </div>
              <div class="animal-contents">
                <div class="animal-description" v-if="currentLanguage === 0">
                  늑대는 자신의 무리를 지킬 수 있는 동물입니다.
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  늑대는 독수리의 사냥으로부터 팀원을 지킬 수 있습니다.
                </div>
                <div class="animal-description" v-else>
                  Only wolf can protect teammates from eagle's hunting.
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  늑대가 독수리의 사냥을 저지하면 독수리는 늑대의 무리에 속하게 됩니다.
                </div>
                <div class="animal-description" v-else>
                  if wolf success to protect from eagles hunting, the eagle is joined wolf's group.
                </div>
              </div>
            </div>
            <div class="animal-role">
              <div class="animal-title">
                <div class="animal-img">
                  <img src="../assets/images/raven.png" alt="">
                </div>
                <div class="animal-text" v-if="currentLanguage === 0">
                  비둘기
                </div>
                <div class="animal-text" v-else>
                  Dove
                </div>
              </div>
              <div class="animal-contents">
                <div class="animal-description" v-if="currentLanguage === 0">
                  비둘기는 무리 간 교류를 담당하고, 나아가 합병까지 이끌어 내는 동물입니다.
                </div>
                <div class="animal-description" v-else>
                  dove can communicate between teams and beyond that,
                  make merging teams.
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  비둘기만 다른 무리에 제약 없이 방문이 가능합니다.
                </div>
                <div class="animal-description" v-if="currentLanguage === 0">
                  그 외 동물은 다른 무리의 공간에 접근이 불가합니다.
                </div>
                <div class="animal-description" v-else>
                  Only dove can visit communicate with another team
                  another animal can't go to another team's area
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="question" v-if="currentLanguage === 0">
            <font>Q.</font> 게임은 어떻게 진행되나요?
          </div>
          <div class="question" v-else>
            <font>Q.</font> What is the process of the game?
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            <font>게임장소는 크게 팀 영역/공동 영역으로 나뉘어 집니다.</font>
          </div>
          <div class="answer" v-else>
            <font>the place is parted by team area/common area</font>
          </div>
          <div class="answer" v-if="currentLanguage === 0">
            팀 영역은 팀원들이 작업을 하는 장소로, 비둘기를 제외한 모든 동물은 자신의 구역만 갈 수 있습니다.<br/>
            공동 구역은 음료를 구매하는 등 모든 동물이 자유롭게 출입이 가능한 장소입니다.
          </div>
          <div class="answer" v-else>
            Team area is working place, every animal only can go to own area. (except Dove) <br>
            Common area is the place To buy a drink or talk to other animals, every animal can enter freely.
          </div>
        </div>
      </div>
      <div class="section">
        <div class="main">
          <div class="answer pad" v-if="currentLanguage === 0">
            <font>게임은 1시간 주기로 낮/밤이 번갈아가며 진행됩니다.</font>,
          </div>
          <div class="answer pad" v-else>
            <font>The game progresses in a one-hour period, alternating day/night.</font>
          </div>
          <div class="time-rule">
            <div class="day">
              <div class="answer-day" v-if="currentLanguage === 0">
                <font>낮</font>
                <br><br>
                낮 동안은 공동구역에 자유롭게 출입이 가능하며,
                비둘기는 다른 동물구역에 자유롭게 왕래하며
                팀 합병을 제안할 수 있습니다.
                늑대는 독수리의 사냥으로 부터 지킬 절반의 팀 멤버를
                정해서 운영측에 제출합니다.
              </div>
              <div class="answer-day" v-else>
                <font>Daytime</font>
                <br><br>
                During the day, every animal can freely enter the common area,
                The dove can move to other animal area and suggest merging team.
                The wolf has to choose half of the teammate to protect from hunting the eagle and Submit it to the management.
              </div>
            </div>
            <div class="night">
              <div class="answer-night" v-if="currentLanguage === 0">
                <font>밤</font>
                <br><br>
                밤이 되면 공동구역에 출입이 불가능해지며,
                비둘기도 다른 구역에 출입이 불가능해 집니다.
                독수리는 자신이 원할때 1회, 1명에 한해서 자신의 사냥감을 지정할 수 있습니다.
                사냥감으로 지정된 동물이 늑대가 수호하는 동물일 경우, 해당 독수리는 사냥에 실패하고 늑대의 팀에 소속되게 됩니다.
              </div>
              <div class="answer-night" v-else>
                <font>Night</font>
                <br><br>
                When the night comes, access to the common area becomes impossible, even dove can't enter other areas.
                whenever Eagles want, they can designate one animal which wants to hunt,
                If the animal has protected by the wolf, the eagle's hunting fail and becomes part of the wolf's team
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="slide" :style="user != null && !justLogined ? 'display:none' : ''">
          <div class="join" v-if="user == null || justLogined">
            <div class="join-input">
              <div class="title" v-if="currentLanguage === 0">
                회원가입
              </div>
              <div class="title" v-else>
                Join
              </div>
              <input v-if="currentLanguage === 0" type="email" placeholder="이메일을 입력해주세요." v-model="joinData.email" :style="error[0] || error[5] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input v-else type="email" placeholder="Please input your email." v-model="joinData.email" :style="error[0] || error[5] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input v-if="currentLanguage === 0" type="text" name="name" placeholder="이름을 입력해주세요" v-model="joinData.name" :style="error[1] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input type="text" v-else name="name" placeholder="Please input your name" v-model="joinData.name" :style="error[1] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input v-if="currentLanguage === 0" type="password" name="password" placeholder="비밀번호를 입력해주세요" v-model="joinData.password" :style="error[2] || error[4] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input v-else type="password" name="password" placeholder="Please input your password" v-model="joinData.password" :style="error[2] || error[4] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input v-if="currentLanguage === 0" type="password" name="password-confirm" placeholder="비밀번호를 다시 입력해주세요" v-model="joinData.passwordConfirm" :style="error[3] || error[4] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <input v-else type="password" name="password-confirm" placeholder="Please rewrite your password" v-model="joinData.passwordConfirm" :style="error[3] || error[4] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { join() } }">
              <div class="button" v-if="currentLanguage === 0">
                <button type="submit" name="button" @click="join">회원가입</button>
              </div>
              <div class="button" v-else>
                <button type="submit" name="button" @click="join">Join</button>
              </div>
              <div class="already-joined" v-if="currentLanguage === 0">
                <a href="javascript:;" onclick="$.fn.fullpage.moveTo(9, 1)">
                  이미 가입하셨나요?
                </a>
              </div>
              <div class="already-joined" v-else>
                <a href="javascript:;" onclick="$.fn.fullpage.moveTo(9, 1)">
                  Did you already join our world?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="slide" :style="user != null && !justLogined ? 'display:none' : ''">
          <div class="top-left-arrow" @click="gotoJoin">
            <img src="../assets/images/arrow-left.svg" >
          </div>
          <div class="login" v-if="user == null || justLogined">
            <div class="login-input">
              <div class="title" v-if="currentLanguage === 0">
                로그인
              </div>
              <div class="title" v-else>
                Login
              </div>
              <input type="email" v-if="currentLanguage === 0" placeholder="이메일을 입력해주세요." v-model="loginData.email" :style="error[6] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { login() } }">
              <input type="email" v-else placeholder="Please input your email" v-model="loginData.email" :style="error[6] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { login() } }">
              <input type="password" v-if="currentLanguage === 0" placeholder="비밀번호를 입력해주세요" v-model="loginData.password" :style="error[7] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { login() } }">
              <input type="password" v-else placeholder="Please input your password" v-model="loginData.password" :style="error[7] ? 'background-color:#ffcccc' : ''" @keydown="($event) => { if ($event.keyCode === 13) { login() } }">
              <div class="button" v-if="currentLanguage === 0">
                <button type="submit" @click="login">로그인</button>
              </div>
              <div class="button" v-else>
                <button type="submit" @click="login">Login</button>
              </div>
            </div>
          </div>
        </div>
        <div class="slide" > <!--:style="user != null && user.role != -1 ? 'display:none' : ''"-->
          <div class="title" v-if="currentLanguage === 0">
            역할 정하기
          </div>
          <div class="title" v-else>
            Choose your Role
          </div>
          <div class="display-circle">
            <div class="circle" @click="selectRole(0)">
              <img src="../assets/images/lion.png">
            </div>
            <div class="circle" @click="selectRole(1)">
              <img src="../assets/images/vulture.png">
            </div>
            <div class="circle" @click="selectRole(2)">
              <img src="../assets/images/wolf.png">
            </div>
            <div class="circle" @click="selectRole(3)">
              <img src="../assets/images/raven.png">
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="top-left-arrow" @click="gotoChangeRole">
            <img src="../assets/images/arrow-left.svg">
          </div>
          <div class="board">
            <div class="board-">
              <div class="title" v-if="currentLanguage === 0" style="text-align: left;" maxlength="50">
                모집 글 쓰기
              </div>
              <div class="title" v-else style="text-align: left;" maxlength="50">
                Post your Idea!
              </div>
              <div class="board-title" v-if="currentLanguage === 0">
                <input type="text" placeholder="제목을 입력하세요. (50자 이내)" v-model="writing.title" :style="error[8] ? 'background-color:#ffcccc' : ''">
              </div>
              <div class="board-title" v-else>
                <input type="text" placeholder="Write subject(less than 100)" v-model="writing.title" :style="error[8] ? 'background-color:#ffcccc' : ''">
              </div>
              <div class="board-content" v-if="currentLanguage === 0">
                <textarea name="name" placeholder="어떤 것을 하고싶은지 짧고 간략하게 적어주세요.
자신에 대한 소개와, 아이디어에 대해 설명 해 주세요. (1000자 이내)" maxlength="1000" v-model="writing.content" :style="error[9] ? 'background-color:#ffcccc' : ''"></textarea>
              </div>
              <div class="board-content" v-else>
                <textarea name="name" placeholder="Write What is your idea (Try to express it in short and clearly.)
Introduce your self and explain your Idea. (Less than 1000)" maxlength="1000" v-model="writing.content" :style="error[9] ? 'background-color:#ffcccc' : ''"></textarea>
              </div>
              <div class="button" v-if="currentLanguage === 0">
                <button @click="postArticle">저장</button>
              </div>
              <div class="button" v-else>
                <button @click="postArticle">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="show-article">
          <div class="title" v-if="currentLanguage === 0">
            모집 글 보기
          </div>
          <div class="title" v-else>
            Browse Ideas
          </div>
          <div class="container-no-article" v-if="articles.length == 0">
            <div class="no-article" v-if="currentLanguage === 0">
              등록된 글이 없습니다!
            </div>
            <div class="no-article" v-else>
              There is no Articles!
            </div>
            <button type="submit" v-if="currentLanguage === 0" @click="gotoWriteArticle" class="btn-write-article">글 쓰러가기</button>
            <button type="submit" v-else @click="gotoWriteArticle" class="btn-write-article">Go to Post</button>
          </div>
          <div class="container-article" :style="containerArticleStyle" v-else-if="windowWidth >= 1200">
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 4 == 0"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 4 == 1"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 4 == 2"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 4 == 3"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
          </div>
          <div class="container-article" :style="containerArticleStyle" v-else-if="windowWidth >= 905">
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 3 == 0"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 3 == 1"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-if="i % 3 == 2"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
          </div>
          <div class="container-article" :style="containerArticleStyle" v-else>
            <div class="part-container-article">
              <Article
                v-for="(article, i) in articles"
                v-bind:key="i"
                v-bind:user="user"
                v-bind:article="article"
                v-bind:index="i"
                v-on:vote="vote"
                v-on:delete="deleteArticle"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/js/jquery.fullpage.js'
import Article from './Article'
export default {
  name: 'Index',
  data () {
    return {
      buttonFolded: true,
      isJoining: false,
      isLogining: false,
      isPosting: false,
      joinData: {
        email: '',
        name: '',
        password: '',
        passwordConfirm: '',
      },
      loginData: {
        email: '',
        password: ''
      },
      writing: {
        title: '',
        content: ''
      },
      justLogined: false,
      user: null,
      error: [],
      articles: [],
      windowWidth: window.innerWidth,
      scrollY: 0,
      currentLanguage: 0
    }
  },
  beforeCreate: function () {
    var loc = window.location.href + ''
    // if (loc.indexOf('http://') == 0){
    //   window.location.href = loc.replace('http://', 'https://');
    // }
    this.$http.get('/auth')
    .then((res) => {
      if(res.data.user != null) {
        this.user = res.data.user
        // console.log(this.user)
        // this.$forceUpdate()
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  mounted: function () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })

    window.addEventListener('scroll', () => {
      $('.moon').css('top', (($(window).height() + $(window).scrollTop()) / 50) + 'px')
    })

    if(localStorage.animalworldLanguage !== undefined) {
      this.currentLanguage = parseInt(localStorage.animalworldLanguage)
      this.currentLanguage ? document.title = 'The hackathon only for you - Animal world' : document.title = '당신만을 위한 해커톤 - 동물의 나라'
    } else {
      localStorage.animalworldLanguage = ((navigator.language || navigator.userLanguage) == 'ko-KR' ? 0 : 1)
      this.currentLanguage = ((navigator.language || navigator.userLanguage) == 'ko-KR' ? 0 : 1)
    }
    $('#' + ['korean','english'][this.currentLanguage]).css('z-index','3')
    $('#' + ['korean','english'][1-this.currentLanguage]).css('z-index','2')

    this.loadArticles()
    this.$forceUpdate()
  },
  beforeRouteUpdate: function () {
    this.$http.get('/auth')
    .then((res) => {
      if(res.data.user != null) {
        this.user = res.data.user
        // console.log(this.user)
        // this.$forceUpdate()
      }
    })
    .catch((err) => {
      console.log(err)
    })
  },
  computed: {
    containerArticleStyle: function () {
      return 'height: ' + (window.innerHeight - 150) + 'px';
    }
  },
  methods: {
    clickButton: function (l) {
      if(this.buttonFolded) {
        this.unfoldButton()
      } else {
        this.changeLanguage(l)
        this.foldButton()
      }
      this.buttonFolded = !this.buttonFolded
    },
    foldButton: function () {
      $('#' + ['korean','english'][this.currentLanguage]).css('z-index','3')
      $('#' + ['korean','english'][1-this.currentLanguage]).css('z-index','2')
      $('#korean').css('bottom', 30)
      $('#english').css('bottom', 30)
    },
    unfoldButton: function () {
      $('#korean').css('bottom', 130)
      $('#english').css('bottom', 230)
    },
    changeLanguage: function (l) {
      localStorage.animalworldLanguage = l
      this.currentLanguage = l
      this.foldButton()
      l? document.title = 'The hackathon only for you - Animal world' : document.title = '당신만을 위한 해커톤 - 동물의 나라'
    },
    getSize: function () {
      this.size = document.documentElement.clientWidth
      this.$forceUpdate()
    },
    join: function () {
      if(!this.isJoining) {
        this.error[0] = (this.joinData.email === '' || /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(this.joinData.email) === false)
        this.error[1] = (this.joinData.name === '')
        this.error[2] = (this.joinData.password.length < 8)
        this.error[3] = (this.joinData.passwordConfirm.length < 8)
        this.error[4] = (this.joinData.password !== this.joinData.passwordConfirm)
        this.error[5] = false
        this.$forceUpdate()
        if(this.joinData.email !== '' && this.joinData.password.length >= 8 && this.joinData.passwordConfirm.length >= 8 && this.joinData.password === this.joinData.passwordConfirm) {
          this.isJoining = true
          $('.join-input .button button').css('color','white')
          $('.join-input .button button').css('background-color','black')
          $('.join-input .button button')[0].innerHTML = ['회원가입 하는중...','Processing...'][this.currentLanguage]
          this.$http.post('/auth/join', {
            email: this.joinData.email,
            password: this.joinData.password,
            name: this.joinData.name
          })
          .then((res) => {
            if (res.data.status) {
              $('.join-input .button button')[0].innerHTML = ['회원가입 성공','Sucess'][this.currentLanguage]
              setTimeout(function () {
                window.$.fn.fullpage.moveTo(9, 1)
              },200)
            } else {
              this.isJoining = false
              if(res.data.message) {
                console.log(res.data.message)
              }
              if(res.data.errorCode) {
                this.error[res.data.errorCode] = true
                $('.join-input .button button').css('color','black')
                $('.join-input .button button').css('background-color','#ffdd00')
                $('.join-input .button button')[0].innerHTML = ['회원가입','Join'][this.currentLanguage]
                this.$forceUpdate()
              }
            }
          })
          .catch((err) => {
            console.log(err)
          })
        }
      }
    },
    login: function () {
      if(!this.isLogining) {
        this.error[6] = (this.loginData.email === '')
        this.error[7] = (this.loginData.password < 8)
        this.$forceUpdate()
        if(this.loginData.email !== '' && this.loginData.password.length >= 8) {
          this.isLogining = true
          $('.login-input .button button').css('color','white')
          $('.login-input .button button').css('background-color','black')
          $('.login-input .button button')[0].innerHTML = ['로그인 하는 중...', 'Processing...'][this.currentLanguage]

          this.$http.post('/auth/login', {
            email: this.loginData.email,
            password: this.loginData.password
          }).then((res) => {
              if (res.data.status) {
                $('.login-input .button button')[0].innerHTML = ['로그인 성공','Success'][this.currentLanguage]
                // this.$router.push('/')
                // window.location.reload()
                this.user = res.data.user;
                this.justLogined = true;
                $.fn.fullpage.moveTo(9, 2);
              } else {
                this.isLogining = false;
                if(res.data.message === 8) {
                  this.error[res.data.message] = true
                  this.$forceUpdate()
                }
                $('.login-input .button button').css('color','black')
                $('.login-input .button button').css('background-color','#ffdd00')
                $('.login-input .button button')[0].innerHTML = ['로그인','Login'][this.currentLanguage]
              }
            }).catch((err) => {
              console.log(err)
            })
        }
      }
    },
    selectRole: function (n) {
      this.$http.post('/api/role', {
        email: this.user.email,
        role: n
      }).then((res) => {
          if (res.data.status) {
            this.user.role = n;
            if(this.user.role == 0) {
              setTimeout(function () {
                window.$.fn.fullpage.moveTo(9, 3);
              },200)
            } else {
              setTimeout(function () {
                window.$.fn.fullpage.moveTo(10, 0);
              },200)
            }
          } else {
            console.log(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    postArticle: function () {
      if(this.isPosting) return
      this.error[8] = (this.writing.title.length == 0)
      this.error[9] = (this.writing.content.length == 0)
      this.$forceUpdate()
      if(!this.error[8] && !this.error[9]) {
        this.isPosting = true
        $('.board- .button button').css('color','white')
        $('.board- .button button').css('background-color','black')
        $('.board- .button button')[0].innerHTML = ['글 게시중...','Posting...'][this.currentLanguage]
        this.$forceUpdate();
        if(this.user != null) {
          this.$http.post('/api/article', this.writing)
            .then((res) => {
              if (res.data.status) {
                if(res.data.article) {
                  this.articles.unshift(res.data.article);
                  this.articles[0].voteCount = this.getVoteCount(this.articles[0].voted)
                  $('.board- .button button').css('color','white')
                  $('.board- .button button').css('background-color','black')
                  $('.board- .button button')[0].innerHTML = ['글 게시 성공','Success'][this.currentLanguage]
                  this.$forceUpdate();
                  setTimeout(function () {
                    window.$.fn.fullpage.moveTo(10, 0);
                    $('.board- .button button').css('color','black')
                    $('.board- .button button').css('background-color','#ffdd00')
                    $('.board- .button button')[0].innerHTML = ['저장','Post'][this.currentLanguage]
                    this.writing.title = ''
                    this.writing.content = ''
                    $('.board- .board-title input')[0].value = ''
                    $('.board- .board-content textarea')[0].value = ''
                  },200)
                } else {
                  if(this.currentLanguage === 0) {
                    $('.board- .button button')[0].innerHTML = (parseInt((res.data.time - (new Date()).getTime()) / 1000 / 60) > 0 ? (parseInt((res.data.time - (new Date()).getTime()) / 1000 / 60) + '분 뒤에 다시 시도해주세요.') : parseInt((res.data.time - (new Date()).getTime()) / 1000) + '초 뒤에 다시 시도해주세요.')
                  } else {
                    $('.board- .button button')[0].innerHTML = (parseInt((res.data.time - (new Date()).getTime()) / 1000 / 60) > 0 ? ('Please Retry after' + parseInt((res.data.time - (new Date()).getTime()) / 1000 / 60) + 'minutes.') : 'Please Retry after' + parseInt((res.data.time - (new Date()).getTime()) / 1000) + 'seconds.')
                  }
                  setTimeout(function () {
                    $('.board- .button button').css('color','black')
                    $('.board- .button button').css('background-color','#ffdd00')
                    $('.board- .button button')[0].innerHTML = ['저장','Post'][this.currentLanguage]
                  },1000)
                }
              } else {
                console.log(res.data.message)
                $('.board- .button button').css('color','black')
                $('.board- .button button').css('background-color','#ffdd00')
                $('.board- .button button')[0].innerHTML = ['저장','Post'][this.currentLanguage]
                this.$forceUpdate();
              }
              this.isPosting = false
            }).catch((err) => {
              console.log(err)
            })
        }
      }
    },
    loadArticles: function () {
      this.$http.get('/api/articles')
        .then((res) => {
          if (res.data.status) {
            for(var i=0;i<res.data.articles.length;i++) {
              this.articles.push(res.data.articles[i]);
              this.articles[this.articles.length-1].voteCount = this.getVoteCount(this.articles[this.articles.length-1].voted)
              this.$forceUpdate()
            }
          } else {
            console.log(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    gotoJoin: function () {
      $.fn.fullpage.moveTo(9, 0);
    },
    gotoWriteArticle: function () {
      $.fn.fullpage.moveTo(9, 5);
    },
    gotoChangeRole: function () {
      if(this.user) {
        this.user.role = -1;
      }
      $.fn.fullpage.moveTo(9, 2);
    },
    vote: function (index) {
      this.$http.post('/api/vote', {articleId: this.articles[index]._id})
        .then((res) => {
          if (res.data.status) {
            this.articles[index] = res.data.article
            this.articles[index].voteCount = this.getVoteCount(this.articles[index].voted)
            this.$forceUpdate()
          } else {
            if(res.data.message == 'NO ROLE') {
              this.gotoChangeRole()
            } else if(res.data.message == 'NO MORE') {
            } else {
              console.log(res.data.message)
            }
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    getVoteCount: function (arr) {
      var array = [0,0,0,0,0];
      for(var i=0; i < arr.length; i++) {
        if(arr[i].role != -1) {
          array[arr[i].role] ++
        }
      }
      return array;
    },
    deleteArticle: function (index) {
      this.$http.post('/api/deletearticle', {articleId: this.articles[index]._id})
        .then((res) => {
          if (res.data.status) {
            this.articles.splice(index, 1);
            this.$forceUpdate()
          } else {
            console.log(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    Article
  }
}

</script>

<style scoped>
  .index {
    position: relative;
    overflow: hidden;
  }
  .moon {
    position: fixed;
    top: 30px;
    right: -50px;
    width: 250px;
    transition: all 2s;
    z-index: -10;
  }
  .moon img, .cloud img {
    width: 100%;
  }
  .cloud {
    position: absolute;
    width: 250px;
    left: -9999px;
  }
  #c1 {
    top: 50px;
    animation-name: cloud1;
    animation-duration: 80s;
  }
  @keyframes cloud1 {
    from {
      left: 80%;
    }
    to {
      left: 120%
    }
  }
  #c2 {
    top: 80px;
    animation-name: cloud2;
    animation-duration: 112s;
  }
  @keyframes cloud2 {
    from {
      left: 30%;
    }
    to {
      left: 120%;
    }
  }
  #c3 {
    top: 170px;
    animation-name: cloud3;
    animation-duration: 162s;
  }
  @keyframes cloud3 {
    from {
      left: -10%;
    }
    to {
      left: 120%;
    }
  }
  #c4 {
    top: -20px;
    animation-name: cloud4;
    animation-duration: 250s;
  }
  @keyframes cloud4 {
    from {
      left: -80%;
    }
    to {
      left: 120%;
    }
  }
  #c5 {
    top: 110px;
    animation-name: cloud5;
    animation-duration: 337s;
  }
  @keyframes cloud5 {
    from {
      left: -150%;
    }
    to {
      left: 120%;
    }
  }
  .language-select-button button {
    position: fixed;
    border: none;
    box-shadow: none;
    outline: none;
    width: 80px;
    height: 80px;
    right: 30px;
    bottom: 30px;
    border-radius: 80px;
    background-color: #1f1a35;
    font-size: 20px;
    color: #fff;
    pointer-events:all;
    transition: all .5s;
    transition-timing-function: cubic-bezier();
  }
  .language-select-button {
    z-index: 1000;
  }
  #english {
    background-image: url('../assets/images/eng.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* bottom: 130px; */
    z-index: 3;
  }
  #korean {
    background-image: url('../assets/images/kor.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* bottom: 230px; */
    z-index: 2
  }
  #close {
    background-image: url('../assets/images/x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
  }
  .main {
    position: relative;
    text-align: center;
    color: #fff;
  }
  .main-subtitle {
    font-size: 75px;
  }
  .main-subtitle-eng {
    font-size: 70px;
  }
  .main-line {
    margin: 25px 0px 10px;
    height: 10px;
    display: inline-block;
    background-color: #fff;
    width: 900px;
  }
  .main-title {
    font-size: 120px;
    font-weight: 700;
  }
  .step {
    display: inline-block;
    margin: 50px;
  }
  .step-circle {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 35px 0px;
    border: 4px solid #fff;
    box-sizing: border-box;
    box-shadow: rgba(255,150,80,.85) 0px 0px 500px 0px;
  }
  .step-description-br {
    display: none;
  }
  .step-description {
    width: 280px;
    font-size: 23px;
  }
  #together {
    background-image: url('../assets/images/together.jpg');
  }
  #make {
    background-image: url('../assets/images/make.jpg');
  }
  #presentation {
    background-image: url('../assets/images/presentation.jpg');
  }
  .main-description {
    font-size: 25px;
    font-weight: 300;
    padding: 5px;
  }
  .main-description font {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
  }
  .prize-img img {
    width: 250px;
  }
  .prize-description {
    font-size: 23px;
    padding: 7px 40px;
  }
  .prize-description font {
    font-size: 35px;
    font-weight: 700;
  }
  .question {
    color: #514d62;
    font-size: 50px;
    font-weight: 300;
    padding: 0px 80px;
  }
  .question font {
    font-weight: 700;
    font-size: 60px;
  }
  .answer {
    margin-top: 20px;
    font-size: 23px;
    padding: 0px 40px;
  }
  .answer font {
    font-size: 27px;
    font-weight: 600;
  }
  .pad {
    padding: 40px;
    box-sizing: border-box;
  }
  .competition {
    margin-top: 80px;
    display: inline-flex;
    flex-wrap: wrap;
    width: 1200px;
  }
  .competition-step {
    display: inline-block;
    padding: 20px;
    box-sizing: border-box;
    width: 360px;
    margin: 0px 20px;
    height: 360px;
    position: relative;
    z-index: 1;
  }
  .competition-step:hover > .competition-img{
    filter: blur(1px);
  }
  .competition-step:hover > .competition-img-tint {
    filter: blur(1px);
    background-color: rgba(0,0,0,0.5);
  }
  .competition-img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 40px;
    filter: blur(50px);
    box-shadow: rgba(0,0,0,0.75) 0px 30px 50px 0px;
    transition: all .3s;
  }
  .competition-img-tint {
    z-index: -1;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 40px;
    background: rgba(0, 0, 0, 0);
    filter: blur(50px);
    transition: all .3s;
  }
  #step1 {
    background-image: url('../assets/images/apply.jpg');
  }
  #step2 {
    background-image: url('../assets/images/participate.jpg');
  }
  #step3 {
    background-image: url('../assets/images/presentation_.jpg');
  }
  .competition-step:nth-child(n+2) .competition-step-title {
    padding-top: 46px;
  }
  .competition-step-title {
    display: inline-block;
    font-size: 38px;
    font-weight: 700;
    width: 100%;
    height: 92px;
    padding-top: 23px;
    box-sizing: border-box;
  }
  .competition-step-description {
    display: inline-block;
    margin-top: 40px;
    font-size: 20px;
    width: 100%;
  }
  .time-rule{
    display: inline-flex;
    color: #222b23;
    line-height: 40px;
    font-size: 24px;
  }
  .day {
    display: table;
    height: 800px;
    width: 400px;
    border-radius: 400px 0 0 400px;
    background-color: #FF8B22;
  }
  .night {
    display: table;
    height: 800px;
    width: 400px;
    border-radius: 0 400px 400px 0;
    background-color: #FFE600;
  }
  .answer-day, .answer-night {
    display: table-cell;
    word-break: keep-all;
    vertical-align: middle;
    padding: 44px;
    box-sizing: border-box;
  }
  .answer-day {
    text-align: right;
  }
  .answer-night {
    text-align: left;
  }
  .answer-day font, .answer-night font {
    font-size: 50px;
    font-weight: 700;
  }
  .animal-role-container {
    width: 1200px;
    margin-top: 30px;
    display: inline-flex;
    flex-wrap: wrap;
  }
  .animal-role {
    width: 600px;
    display: inline-flex;
    margin: 30px 0px;
    padding: 0px 20px;
    box-sizing: border-box;
  }
  .animal-title {
    width: 150px;
    display: inline-block;
  }
  .animal-img {
    width: 130px;
    height: 130px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: rgb(33, 26, 62);
    position: relative;
  }
  .animal-img img {
    width: 130px;
  }
  .animal-text {
    padding-top: 20px;
    font-size: 30px;
    font-weight: 700;
  }
  .animal-contents {
    display: inline-block;
    text-align: left;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .animal-description {
    display: block;
    font-size: 18px;
    padding: 0px 0px 10px;
  }
  .animal-description:first-child {
    font-weight: 700;
    font-size: 22px;
    padding: 0px 0px 20px;
  }
  .join, .login, .board {
    text-align: center;
  }
  .join-input, .login-input{
    display: inline-block;
  }
  .board- {
    display: inline-block;
  }
  .board- a{
    font-size: 100px ;
    font-weight: 700;
    color: white;
  }
  .form {
    margin: 0 auto;
    text-align: center;
    margin: auto;
  }
  .recruit{
    text-align: center;
  }
  .recruit a{
    color: white;
    margin: 20px 0;
    display: block;
    font-size: 100px;
    font-weight: 700;
    text-decoration: none;
  }

  .join-input input, .login-input input{
    display: block;
    margin: 7px 0px;
    width: 250px;
    height: 40px;
    background-color: #f1f1f1;
    outline: none;
    border: none;
    text-align: center;
    font-size: 15px;
    border-radius: 0.5rem;
    font-weight: 400;
  }
  .board-title input{
    width: 600px;
    height: 50px;
    display: block;
    margin: 7px 0px;
    outline: none;
    border: none;
    text-align: left;
    font-size: 15px;
    border-radius: 0.2rem;
    background-color: #f1f1f1;
    padding: 10px;
    box-sizing: border-box;
  }
  .board-content textarea{
    width: 600px;
    height : 300px;
    display: block;
    margin: 7px 0px;
    outline: none;
    font-size: 15px;
    border: none;
    text-align: left;
    border-radius: 0.2rem;
    background-color: #f1f1f1;
    padding: 10px;
    box-sizing: border-box;
    resize: none;
  }

  .join-input button, .login-input button {
    display: block;
    margin: 7px 0px;
    cursor: pointer;
    background-color: #ffdd00;
    font-weight: 700;
    width: 250px;
    height: 40px;
    border-radius: 0.5rem;
    outline: none;
    font-size: 15px;
    box-shadow: none;
    border: none;
  }
  .board- button{
    display: block;
    margin: 7px 0px;
    cursor: pointer;
    background-color: #ffdd00;
    font-weight: 700;
    width: 600px;
    height: 40px;
    border-radius: 0.5rem;
    outline: none;
    font-size: 15px;
    box-shadow: none;
    border: none;
  }
  .button{
    display: inline-block;
  }
  .title{
    font-size: 50px;
    color: white;
    margin: 30px 0px;
    font-weight: 700;
    text-align: center;
  }
  .circle {
    display: inline-flex;
    margin: 0 60px;
    cursor: pointer;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: rgb(33, 26, 62);
    position: relative;
  }
  .circle > img {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 150px;
  }
  .display-circle {
    text-align: center;
  }
  .already-joined {
    padding: 10px;
  }
  .already-joined a {
    color: white;
  }
  .show-article {
    text-align: center;
  }
  .container-article {
    display: inline-flex;
    flex-wrap: wrap;
    overflow: auto;
  }
  .container-no-article {
    display: inline-block;
  }
  .part-container-article {
    display: inline-block;
    width: 275px;
    margin: 0px 20px 0px 0px;
  }
  .part-container-article:first-child {
    margin: 0px 20px 0px 20px;
  }
  .no-article {
    display: block;
    padding: 10px;
    font-size: 20px;
    color: #fff;
  }
  .btn-write-article {
    display: inline-block;
    margin: 7px 0px;
    cursor: pointer;
    background-color: #ffdd00;
    font-weight: 700;
    width: 150px;
    height: 40px;
    border-radius: 0.5rem;
    outline: none;
    font-size: 15px;
    box-shadow: none;
    border: none;
  }
  .slide {
    position: relative;
  }
  .section {
    background-color: rgba(0,0,0,0.25);
  }
  .top-left-arrow {
    position: absolute;
    top: 80px;
    left: 80px;
    cursor: pointer;
    border-radius: 50%;
  }
  .top-left-arrow img{
    width: 80px;
    height: auto;
  }
  .removed {
    animation-duration: 1s;
    animation-name: fadeout;
    animation-timing-function: ease-out;
  }
  @keyframes fadeout {
    from {
      opacity: 1;
      top: 0px;
    }
    to {
      opacity: 0;
      top: -50px;
    }
  }
  @media(max-width:1600px) {
    .time-rule{
      font-size: 21px;
      line-height: 35px;
    }
    .day {
      height: 700px;
      width: 350px;
      border-radius: 350px 0 0 350px;
    }
    .night {
      height: 700px;
      width: 350px;
      border-radius: 0 350px 350px 0;
    }
    .answer-day, .answer-night {
      padding: 0 40px;
    }
    .answer-day font, .answer-night font {
      font-size: 40px;
    }
  }
  @media(max-width:1400px) {
    .circle {
      margin: 0 25px;
    }
    .time-rule {
      font-size: 18px;
      line-height: 30px;
    }
    .day {
      height: 600px;
      width: 300px;
      border-radius: 300px 0 0 300px;
    }
    .night {
      height: 600px;
      width: 300px;
      border-radius: 0 300px 300px 0;
    }
    .answer-day, .answer-night {
      padding: 0px 30px;
    }
    .answer-day font, .answer-night font {
      font-size: 40px;
    }
  }
  @media(max-width:1200px) {
    .step {
      margin: 20px;
    }
    .step-circle {
      width: 250px;
      height: 250px;
    }
    .step-description {
      width: 250px;
    }
    .step-description-br {
      display: inline;
    }
    .main-description {
      display: inline-block;
      text-align: left;
      width: 840px;
    }
    .competition {
      width: 930px;
    }
    .competition-step {
      width: 270px;
      height: 400px;
    }
    .competition-step:nth-child(n+2) .competition-step-title {
      padding-top: 23px;
    }
    .competition-step-title {
      font-size: 35px;
      height: auto;
    }
    .animal-role-container {
      width: 1024px;
    }
    .animal-role {
      width: 512px;
    }
    .animal-description {
      font-size: 18px;
    }
  }
  @media(max-width:1024px) {
    .circle{
      margin: 0 30px;
      width: 120px;
      height: 120px;
    }
    .circle > img{
      height: 120px;
    }
    #c2, #c4 {
      display: none;
    }
    .animal-role-container {
      width: 930px;
      margin-top: 20px;
    }
    .animal-role {
      width: 465px;
      margin: 0px 0px 30px;
    }
    .animal-title {
      width: 100px;
    }
    .animal-img {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
    .animal-img img {
      width: 100px;
    }
    .animal-contents {
      width: 630px;
      box-sizing: border-box;
    }
    .animal-description:first-child {
      padding-bottom: 20px;
      font-size: 20px;
    }
    .animal-description {
      font-size: 16px;
      padding-bottom: 5px;
    }
    .animal-text {
      padding-top: 10px;
      font-size: 20px;
    }
    .question {
      font-size: 38px;
    }
    .question font {
      font-size: 45px;
    }
    .prize-description-br {
      display: none;
    }
  }
  @media(max-width:970px) {
    .circle{
      margin: 0 10px;
    }
    .main-subtitle {
      font-size: 50px;
    }
    .main-subtitle-eng {
      font-size: 40px;
    }
    .main-line {
      width: 520px;
    }
    .main-title {
      font-size: 75px;
    }
    .step {
      margin: 10px;
    }
    .step-circle {
      width: 180px;
      height: 180px;
      margin: 30px 0px 20px;
    }
    .step-description {
      width: 180px;
      font-size: 16px;
    }
    .main-description {
      width: 600px;
      font-size: 20px;
    }
    .main-description font {
      font-size: 25px;
    }
    .competition {
      width: 720px;
    }
    .competition-step {
      width: 240px;
      height: 375px;
      padding-top: 0;
      margin: 10px 0px;
    }
    .competition-step-title {
      font-size: 28px;
      margin-top: 0;
      height: auto;
    }
    .competition-step-description {
      margin-top: 10px;
    }
    .animal-role-container {
      width: 730px;
    }
    .animal-role {
      width: 365px;
    }
    .animal-title {
      width: 80px;
    }
    .animal-img {
      width: 80px;
      height: 80px;
    }
    .animal-img img {
      width: 80px;
    }
    .animal-description:first-child {
      font-size: 17px;
    }
    .animal-description {
      font-size: 12px;
    }
    .question {
      font-size: 32px;
    }
    .question font {
      font-size: 40px;
    }
    .answer {
      font-size: 20px;
    }
    .answer font {
      font-size: 24px;
    }
    .prize-description {
      font-size: 20px;
    }
    .prize-description font {
      font-size: 24px;
    }
    .prize-img img {
      width: 220px;
    }
    .time-rule{
      font-size: 15px;
      line-height: 24px;
    }
    .day {
      height: 480px;
      width: 240px;
      border-radius: 240px 0 0 240px;
    }
    .night {
      height: 480px;
      width: 240px;
      border-radius: 0 240px 240px 0;
    }
    .answer-day, .answer-night {
      padding: 0px 20px;
    }
    .answer-day font, .answer-night font {
      font-size: 30px;
    }
  }
  @media(max-width:730px) {
    .circle{
      margin: 0 10px;
      width: 100px;
      height: 100px;
    }
    .circle > img{
      height: 100px;
    }
    .prize-img img {
      width: 280px;
    }
    .br-ignore {
      display: none;
    }
    .competition {
      width: 600px;
    }
    .competition-step {
      width: 600px;
      height: 210px;
      padding-top: 0;
      margin: 10px 0px;
    }
    .competition-step-title {
      font-size: 30px;
      margin-top: 0;
      height: auto;
    }
    .competition-step-description {
      font-size: 22px;
    }
    .animal-role-container {
      width: 640px;
    }
    .animal-role {
      width: 640px;
      margin-top: 10px;
    }
    .animal-title {
      width: 100px;
    }
    .animal-img {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
    .animal-img img {
      width: 100px;
    }
    .animal-contents {
      width: 490px;
      box-sizing: border-box;
    }
    .animal-description:first-child {
      padding-bottom: 20px;
      font-size: 20px;
    }
    .animal-description {
      font-size: 17px;
      padding-bottom: 5px;
    }
    .animal-text {
      padding-top: 10px;
      font-size: 20px;
    }
  }
  @media(max-width:640px) {
    .top-left-arrow{
      position: absolute;
      top: 50px;
      left: 45px;
      cursor: pointer;
      border-radius: 50%;
    }
    .top-left-arrow img {
      width: 60px;
      height: auto;
    }
    .circle{
      margin: 10px 20px;
      width: 100px;
      height: 100px;
    }
    .circle > img {
      height: 100px;
    }
    .board-title input {
      width: 500px
    }
    .board-content textarea {
      width: 500px;
    }
    .board- button {
      width: 500px;
    }
    .board button {
      height: 60px !important;
      font-size: 22px !important;
    }
    .board input {
      font-size: 22px !important;
      height: 70px !important;
      padding: 18px !important;
    }
    .board textarea {
      font-size: 22px !important;
      padding: 18px !important;
      height: 500px !important;
    }
    .part-container-article {
      width: 500px;
    }
    .login input, .join input, .login button, .join button {
      height: 70px !important;
      width: 350px;
      font-size: 22px;
    }
    .already-joined {
      font-size: 22px;
    }
    .step {
      margin: 10px 25px;
    }
    .step-container {
      margin-top: 50px;
    }
    .step-circle {
      width: 200px;
      height: 200px;
      margin: 10px 0px 20px;
    }
    .step-description {
      width: 200px;
      font-size: 20px;
    }
    .main-description {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 20px;
    }
    .main-description font {
      font-size: 25px;
    }
  }
  ::-webkit-scrollbar {
    /* border: 1px solid #a15c95; */
    background: rgb(8,0,40);
    border-radius: 0px 0px 5px 0px;
  }
  ::-webkit-scrollbar-thumb {
    width: 3px;
    border: 5px solid rgb(8,0,40);
    border-radius: 15px;
    background: rgb(38,30,80);
  }
  ::selection {
    background: #FFAA00;
    color: #FFF;
    text-shadow: none;
  }
  ::-moz-selection {
    background: #FFAA00;
    color: #FFF;
    text-shadow: none;
  }
  ::-webkit-selection {
    background: #FFAA00;
    color: #FFF;
    text-shadow: none;
  }
</style>
