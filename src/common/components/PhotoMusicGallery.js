export const GalleryWithMusic = ({ items }) => {
    return (
      <div className='photo-gallery'>
        {shuffle(items).map((item, index) => {
          if (item.type === 'photo') {
            return <img key={index} src={item.src} />;
          } else if (item.type === 'music') {
            return <iframe width={200} height={160} key={index} src={item.src+"&color=%232f2f2f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}  />;
          }
        })}
      </div>
    );
  };

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }