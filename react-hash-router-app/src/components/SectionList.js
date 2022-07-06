import {Headline} from './Headline';

const SectionList = () =>
  [1, 2, 3, 4, 5].map((num, index) => {
    return (
      <Headline key={num} id={`section${num}`}>
        Section {num}
      </Headline>
    );
  });

export {SectionList};
