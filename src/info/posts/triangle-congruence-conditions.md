---
slug: "triangle-congruence-conditions"
title: "삼각형의 합동 조건 SSS·SAS·ASA 총정리, 중1 수학 서술형 증명 쓰는 순서까지"
description: "삼각형의 합동 조건은 세 변(SSS), 두 변과 그 끼인각(SAS), 한 변과 그 양 끝 각(ASA) 세 가지입니다. 그림으로 보는 조건별 차이, SSA와 AAA가 합동 조건이 될 수 없는 까닭, 서술형 증명 쓰는 순서와 확인 문제를 정리했습니다."
date: 2026-10-08
category: study
cover: /assets/img/triangle-congruence.webp
coverAlt: "삼각형의 합동 조건을 공부하다 교정 벤치에 앉아 연필을 들고 환하게 웃는 교복 차림 중학생"
---

**삼각형의 합동 조건**은 두 삼각형이 완전히 포개어지는지(합동인지) 판단하는 세 가지 기준으로, **세 변의 길이가 각각 같을 때(SSS), 두 변의 길이와 그 끼인각의 크기가 각각 같을 때(SAS), 한 변의 길이와 그 양 끝 각의 크기가 각각 같을 때(ASA)**입니다. 이 셋 중 하나만 확인하면 나머지 변과 각을 모두 재지 않아도 두 삼각형이 합동이라고 말할 수 있습니다.

<div class="tldr">
<span class="tldr-t">핵심 요약</span>
<ul>
<li>합동 조건은 <b>SSS, SAS, ASA</b> 세 가지뿐입니다. S는 변(Side), A는 각(Angle)입니다.</li>
<li>SAS의 각은 반드시 <b>두 변 사이에 끼인각</b>, ASA의 각은 <b>그 변의 양 끝 각</b>이어야 합니다.</li>
<li>서술형 증명은 <b>같은 것 세 개 → 근거 → 합동 조건 → 결론</b> 순서로 씁니다.</li>
</ul>
</div>

## 합동이란 무엇인가요?

모양과 크기가 같아서 한 도형을 옮겨 다른 도형에 **완전히 포갤 수 있을 때** 두 도형을 서로 **합동**이라고 합니다. 기호로는 ≡를 써서 △ABC ≡ △DEF처럼 나타냅니다.

이때 꼭 지켜야 할 약속이 있습니다. **꼭짓점은 서로 대응하는 순서대로** 씁니다. △ABC ≡ △DEF라고 쓰면 A와 D, B와 E, C와 F가 서로 대응한다는 뜻이고, 그래서 변 AB와 변 DE, ∠B와 ∠E가 같다는 것까지 기호 하나에 담깁니다. 순서를 바꿔 쓰면 다른 뜻이 되므로 서술형에서 감점되기 쉽습니다.

두 삼각형이 합동이면 **대응하는 변의 길이가 같고, 대응하는 각의 크기가 같습니다.** 합동 조건은 이 여섯 가지(변 셋, 각 셋)를 모두 확인하지 않고 세 가지만으로 판단하는 방법입니다.

## 삼각형의 합동 조건 세 가지

주황색으로 표시한 부분이 각 조건에서 같아야 하는 변과 각입니다.

<ul class="cards">
<li><span class="card-k">SSS 합동</span><svg viewBox="0 0 140 110" role="img" aria-label="세 변이 모두 강조된 삼각형"><polygon points="20,92 122,92 56,18" fill="#FFF6F0" stroke="none"/><line x1="20" y1="92" x2="122" y2="92" stroke="#F26B1D" stroke-width="5" stroke-linecap="round"/><line x1="20" y1="92" x2="56" y2="18" stroke="#F26B1D" stroke-width="5" stroke-linecap="round"/><line x1="122" y1="92" x2="56" y2="18" stroke="#F26B1D" stroke-width="5" stroke-linecap="round"/><text x="8" y="106" font-size="13" fill="#15203B">A</text><text x="124" y="106" font-size="13" fill="#15203B">B</text><text x="50" y="13" font-size="13" fill="#15203B">C</text></svg><b>세 변이 각각 같다</b><p>AB = DE, BC = EF, CA = FD이면 △ABC ≡ △DEF입니다.</p></li>
<li><span class="card-k">SAS 합동</span><svg viewBox="0 0 140 110" role="img" aria-label="두 변과 그 사이의 각이 강조된 삼각형"><polygon points="20,92 122,92 56,18" fill="#FFF6F0" stroke="#15203B" stroke-width="2"/><line x1="20" y1="92" x2="122" y2="92" stroke="#F26B1D" stroke-width="5" stroke-linecap="round"/><line x1="20" y1="92" x2="56" y2="18" stroke="#F26B1D" stroke-width="5" stroke-linecap="round"/><path d="M38 92 A18 18 0 0 0 28 76" fill="none" stroke="#F26B1D" stroke-width="3"/><text x="8" y="106" font-size="13" fill="#15203B">A</text><text x="124" y="106" font-size="13" fill="#15203B">B</text><text x="50" y="13" font-size="13" fill="#15203B">C</text></svg><b>두 변과 그 끼인각이 같다</b><p>AB = DE, AC = DF, ∠A = ∠D이면 △ABC ≡ △DEF입니다.</p></li>
<li><span class="card-k">ASA 합동</span><svg viewBox="0 0 140 110" role="img" aria-label="한 변과 그 양 끝 각이 강조된 삼각형"><polygon points="20,92 122,92 56,18" fill="#FFF6F0" stroke="#15203B" stroke-width="2"/><line x1="20" y1="92" x2="122" y2="92" stroke="#F26B1D" stroke-width="5" stroke-linecap="round"/><path d="M38 92 A18 18 0 0 0 28 76" fill="none" stroke="#F26B1D" stroke-width="3"/><path d="M104 92 A18 18 0 0 1 110 79" fill="none" stroke="#F26B1D" stroke-width="3"/><text x="8" y="106" font-size="13" fill="#15203B">A</text><text x="124" y="106" font-size="13" fill="#15203B">B</text><text x="50" y="13" font-size="13" fill="#15203B">C</text></svg><b>한 변과 그 양 끝 각이 같다</b><p>AB = DE, ∠A = ∠D, ∠B = ∠E이면 △ABC ≡ △DEF입니다.</p></li>
</ul>

세 조건은 **삼각형이 하나로 정해지는 조건**과 같습니다. 작도 단원에서 배운 것처럼 세 변의 길이, 두 변의 길이와 그 끼인각, 한 변의 길이와 그 양 끝 각 가운데 하나가 주어지면 삼각형은 딱 하나만 그려집니다. 똑같은 재료로 그린 삼각형은 하나뿐이니, 두 삼각형은 서로 포개어질 수밖에 없습니다.

## 합동 조건이 될 수 없는 두 가지

### SSA: 두 변과 끼인각이 아닌 각

두 변의 길이와 한 각이 같아도, 그 각이 두 변 **사이에 끼인각이 아니면** 합동이라고 할 수 없습니다. 같은 재료로 삼각형이 두 가지 생길 수 있기 때문입니다.

<figure class="fig"><svg viewBox="0 0 200 150" role="img" aria-label="각 B와 변 BA, 변 AC의 길이가 같지만 꼭짓점 C가 C1과 C2 두 곳에 생기는 그림"><line x1="30" y1="120" x2="185" y2="120" stroke="#15203B" stroke-width="2"/><line x1="30" y1="120" x2="110" y2="40" stroke="#F26B1D" stroke-width="4" stroke-linecap="round"/><line x1="110" y1="40" x2="68.8" y2="120" stroke="#F26B1D" stroke-width="3" stroke-dasharray="6 5"/><line x1="110" y1="40" x2="151.2" y2="120" stroke="#F26B1D" stroke-width="3"/><path d="M48 120 A18 18 0 0 0 42.7 107.3" fill="none" stroke="#15203B" stroke-width="2"/><circle cx="68.8" cy="120" r="3.5" fill="#15203B"/><circle cx="151.2" cy="120" r="3.5" fill="#15203B"/><text x="18" y="136" font-size="13" fill="#15203B">B</text><text x="106" y="32" font-size="13" fill="#15203B">A</text><text x="60" y="138" font-size="13" fill="#15203B">C₁</text><text x="143" y="138" font-size="13" fill="#15203B">C₂</text></svg><figcaption>∠B, 변 BA, 변 AC의 길이가 같아도 C₁과 C₂ 두 가지 삼각형이 생깁니다.</figcaption></figure>

### AAA: 세 각만 같을 때

세 각의 크기가 같으면 모양은 같지만 **크기는 다를 수 있습니다.** 정삼각형은 크기와 관계없이 세 각이 모두 60°인 것이 대표적인 예입니다. 모양만 같은 관계는 중학교 2학년에서 배우는 **닮음**입니다. 합동이 되려면 적어도 변 하나의 길이가 같아야 합니다.

<div class="callout tip">
<span class="callout-t">한 변과 두 각이 같은데 끼인 위치가 아니라면?</span>
<p>예를 들어 BC = EF, ∠A = ∠D, ∠B = ∠E인 경우입니다. 삼각형의 세 각의 합은 180°이므로 ∠C = ∠F도 같아집니다. 그러면 변 BC와 그 양 끝 각 ∠B, ∠C가 같으므로 ASA 합동으로 설명할 수 있습니다.</p>
</div>

## 서술형 증명 쓰는 순서

삼각형의 합동을 이용한 서술형은 대부분 같은 틀로 씁니다. 아래 예시로 순서를 익혀 두세요.

<figure class="fig"><svg viewBox="0 0 200 160" role="img" aria-label="선분 AB와 선분 CD가 점 O에서 만나 서로를 이등분하는 그림"><line x1="30" y1="30" x2="170" y2="130" stroke="#15203B" stroke-width="2"/><line x1="30" y1="130" x2="170" y2="30" stroke="#15203B" stroke-width="2"/><line x1="30" y1="30" x2="30" y2="130" stroke="#F26B1D" stroke-width="2.5"/><line x1="170" y1="30" x2="170" y2="130" stroke="#F26B1D" stroke-width="2.5"/><circle cx="100" cy="80" r="3.5" fill="#15203B"/><text x="16" y="28" font-size="13" fill="#15203B">A</text><text x="174" y="142" font-size="13" fill="#15203B">B</text><text x="16" y="142" font-size="13" fill="#15203B">C</text><text x="174" y="28" font-size="13" fill="#15203B">D</text><text x="96" y="70" font-size="13" fill="#15203B">O</text></svg><figcaption>선분 AB와 CD가 점 O에서 만나고, OA = OB, OC = OD입니다. △AOC ≡ △BOD임을 보이세요.</figcaption></figure>

<ol class="steps">
<li><b>같은 것 세 개를 찾는다</b><span>문제에 주어진 것(OA = OB, OC = OD)과, 그림에서 보이는 것(맞꼭지각 ∠AOC와 ∠BOD)을 찾습니다.</span></li>
<li><b>각각의 근거를 쓴다</b><span>OA = OB (가정), OC = OD (가정), ∠AOC = ∠BOD (맞꼭지각)처럼 괄호 안에 이유를 적습니다.</span></li>
<li><b>합동 조건을 고른다</b><span>두 변과 그 사이의 끼인각이 같으므로 SAS 합동입니다.</span></li>
<li><b>대응 순서에 맞춰 결론을 쓴다</b><span>△AOC ≡ △BOD (SAS 합동). A와 B, O와 O, C와 D가 대응하도록 순서를 맞춥니다.</span></li>
</ol>

근거로 자주 쓰이는 것은 **가정(문제에 주어진 조건), 공통인 변, 맞꼭지각, 평행선의 엇각과 동위각**입니다. 서술형 감점은 대부분 근거를 빠뜨리거나 꼭짓점 순서를 틀린 데서 나옵니다.

## 확인 문제

△ABC와 △DEF에서 다음 조건이 주어졌을 때 두 삼각형이 합동인지 판단해 보세요.

<details class="reveal">
<summary>① AB = DE, BC = EF, ∠B = ∠E</summary>
<p>합동입니다. ∠B와 ∠E는 두 변 사이의 끼인각이므로 <b>SAS 합동</b>입니다.</p>
</details>

<details class="reveal">
<summary>② AB = DE, BC = EF, ∠A = ∠D</summary>
<p>합동이라고 할 수 없습니다. ∠A는 변 AB와 BC 사이에 끼인각이 아니므로 <b>SSA</b>에 해당합니다.</p>
</details>

<details class="reveal">
<summary>③ ∠A = ∠D, ∠B = ∠E, AB = DE</summary>
<p>합동입니다. 변 AB와 그 양 끝 각이 같으므로 <b>ASA 합동</b>입니다.</p>
</details>

<details class="reveal">
<summary>④ ∠A = ∠D, ∠B = ∠E, ∠C = ∠F</summary>
<p>합동이라고 할 수 없습니다. 세 각만 같으면 크기가 다를 수 있습니다(<b>AAA</b>).</p>
</details>

틀린 문제는 왜 틀렸는지 한 줄로 적어 두면 같은 함정에 다시 걸리지 않습니다. 정리 방법은 [오답노트, 채점하고 끝내면 안 되는 이유](/info/wrong-answer-note/)를 참고하세요.

## 자주 묻는 질문

### 삼각형의 합동 조건은 중1 몇 학기에 배우나요?

보통 중학교 1학년 2학기 도형 단원에서 작도와 함께 배웁니다. 교과서 출판사에 따라 단원 이름과 순서가 조금씩 다르니, 아이가 쓰는 교과서의 목차에서 '작도와 합동' 또는 '삼각형의 합동' 부분을 확인하세요.

### SAS와 ASA는 어떻게 구별하나요?

**가운데 글자가 끼인 것**이라고 기억하면 쉽습니다. SAS는 변(S) 두 개 사이에 각(A)이 끼어 있고, ASA는 각(A) 두 개 사이에 변(S)이 끼어 있습니다. 그림에서 같은 것으로 표시한 부분이 이 배치와 맞는지 확인하면 됩니다.

### 직각삼각형의 합동 조건도 지금 외워야 하나요?

직각삼각형의 합동 조건(RHA, RHS)은 중학교 2학년에서 배웁니다. 중1에서는 SSS, SAS, ASA 세 가지를 그림과 함께 확실히 이해하는 것이 먼저입니다. 이 세 조건이 탄탄하면 2학년 내용도 자연스럽게 이어집니다.

### 합동 증명 서술형에서 가장 많이 감점되는 부분은 어디인가요?

근거를 빼먹는 경우와 꼭짓점의 대응 순서를 틀리게 쓰는 경우가 가장 많습니다. "∠AOC = ∠BOD"만 쓰고 "(맞꼭지각)"을 쓰지 않거나, △AOC ≡ △DOB처럼 순서를 바꿔 쓰면 감점될 수 있습니다.
