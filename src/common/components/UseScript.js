import { useEffect, useState } from 'react';

export const UseScriptUrl = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export const UseScriptText = scriptText => {
    const [scriptAdded, setScriptAdded] = useState(false);
  
    useEffect(() => {
      if (!scriptAdded) {
        const script = document.createElement('script');
  
        script.type = 'text/javascript';
        script.text = scriptText;
        script.async = true;
  
        document.body.appendChild(script);
        setScriptAdded(true);
        
        return () => {
          document.body.removeChild(script);
        };
      }
    }, [scriptText, scriptAdded]);
  };

  