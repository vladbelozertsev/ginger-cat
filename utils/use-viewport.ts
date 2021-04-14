import { useEffect, useState } from 'react';

// https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
export default function useInView(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log('isIntersecting - ', isIntersecting);
  }, [isIntersecting]);

  return isIntersecting;
}
