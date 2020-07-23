import {useState, useEffect} from 'react';
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

export default (tracking, callback) => {
    const [err, setErr] = useState(null);


    //Stale reference without watching callback and cleaning up.
    //Add both callback to deps and a cleanup function to prevent crashes.
    //Always add props, context, or state to deps when referenced in useEffect.
    //Should not reference helper functions within useEffect
    //Define function within useEffect instead.
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const {granted} = await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },
                    callback
                );
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
            } catch (e) {
                setErr(e);
            }
        };
        if (tracking) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }
        //Cleanup function
        return () => {
            if (subscriber)
                subscriber.remove();
        };
    }, [tracking, callback]);

    return [err];
};

