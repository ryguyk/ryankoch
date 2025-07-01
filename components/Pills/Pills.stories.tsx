import Pills from './Pills';

export default {
  title: 'Pills',
  component: Pills,
};

const labels = ['Tag1', 'Tag2', 'Tag3'];

export const Primary = () => 
  <Pills
    labels={labels}
    variant="primary"
  />;

export const Secondary = () => 
  <Pills
    labels={labels}
    variant="secondary"
  />;

export const PrimaryTransparent = () => 
  <Pills
    labels={labels}
    variant="primary"
    filled={false}
  />;


export const SecondaryTransparent = () => 
  <Pills
    labels={labels}
    variant="secondary"
    filled={false}
  />;
