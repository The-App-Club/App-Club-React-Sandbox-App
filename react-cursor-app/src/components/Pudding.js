import React, { useState, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';

const Container = styled.main`
  @media screen and (min-width: 769px) {
    max-width: 30vw;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    max-width: 80vw;
    margin: 0 auto;
  }
`;

const Paragraph = styled.main`
  margin-bottom: 100px;
`;

const Pudding = () => {
  return (
    <Container>
      <h2>Pudding</h2>
      <section>
        <Paragraph>
          私は晩とうていこの相談院というのの頃を直さなた。どうしても場合が不足院ぞ余計その品評ますたまでに立つているますをは相違次ぐますたと、なぜにも読まうないんた。辺を云った事はそんなに当時をきっとませでん。はたして大森さんに焦燥金力そう話をなるう念その自己私か支配がってお批評ですなりなうて、そうした今はあなたか金力西洋の進んが、嘉納君の方に哲学のそれにもし実相当と認めるでこれ他が大参考へするように何だかご評をするたですて、なおなお影響で被せるですてしまうですのに這入っべきだ。
        </Paragraph>
      </section>
      <Paragraph>
        だからそれならご事情からし事はこう上手と得るたて、その主義をは這入るでばについて気味より出ているないまい。そんなため上流の中そんな著書はあなた中がなるませかと
        <b>大森さん</b>
        に書いないなかっ、時分の当時たといったご病気なますべきば、天下の中に生徒をほかかもの個人よりほか見合せからいると、はっきりの先刻からなるからこのためにもしいうでたと落ちつけるたのまして、悪いましたて実際ご主義した訳たですです。
      </Paragraph>
      <Paragraph>
        つまり演壇か熱心か始末で掘りましば、十月ごろ自己になるているた日にご学問の十一月が留めますです。当時がは人知れずして見えるらしくたうないで、たとい幾分降るて懊悩もどうまるたのまし。
        <a href="https://lipsum.sugutsukaeru.jp/index.cgi">
          しかも小馳走を折っでもしまえな点ですと、
        </a>
        辺には、何だか私かさてしかるれませない広めよせよでましと通っで、国家はするから来だなけれ。
      </Paragraph>
      <Paragraph data-cursor="https://icons.iconarchive.com/icons/goescat/macaron/128/google-keep-icon.png">
        とうていけっしては至極標準といういうが、これにしか直接上ともどこのお内約は恥ずかしい死んみるないた。私はどうも変化ののにお仕事も移ろているたたんですと、五二の順々を多少怠けうって仕事たから、実はこの未成の議会に打ちれから、私かをどこの教師に公言へ根ざして得るたのでうとらくなるて病気いくれないう。向背をしかし大森さんをまたそう強いるたのでたろらしく。大森さんはこう西洋が漬けと聴こなものうですん。（かつ男がきまっ時ないうならてうしか上っましなけれながら、）それほど云わで釣に、三井の弟までありでかい摘んという、道の相違は十一月の所ばかりする申しのに見えありとお話通りしのでみるたというご文壇ん事あっ。
      </Paragraph>

      <Paragraph>
        通りの時間に、どんな概念から前を勧めばかり、昔上と実際今万十一年からできまでの小学校に、それかするな見当へ飛びない事実はもちろんさせ事うて、ちょうどこう仕儀を長くて、そののがある事に不幸です好いできでしょう。けれどもすでに時分五四十年と願っまでは応じですに従って低級でし仕事に釣って、家来にその以上そのところが思うてしまいべき訳た。単にに校長に人心いけん四一日平生を云うて、ここか充たすなかっでいるでにおいてのに始終するたのうて、むくむく上るのに大変たや、かつて英語が保つと申しているたまし。底にしとするて私か広い点に叱りようになっだけするんたて、ただ仕方は面白いのに出て、いつに当座を生きくれから一行と一円も一篇はとにかく立ち行かば行っかもたのます。十一月でんか思い師範に知れて、この鼻も不明ない必要著としましのたはなっないた、悪い内々のためが応じなら中腰う思えと考えからくるなものなで。
      </Paragraph>
    </Container>
  );
};

export { Pudding };
