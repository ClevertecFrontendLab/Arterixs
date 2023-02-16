import fonFull from '../../assets/image/webp/fon.webp';

export const FullCard = (props: {img: string}) => <div className='book__image' style={{ backgroundImage: `url(${props.img})` }} />;
