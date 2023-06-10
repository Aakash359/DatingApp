import AsyncStorage from "@react-native-async-storage/async-storage";

interface MediaAPIResponse {
    location: string;
  }

export async function uploadImageAndroid(p_image: any): Promise<MediaAPIResponse[]> {
    const route = `manifest/media`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', route);
    const formData = new FormData();
    formData.append('files', p_image);
    const token = await AsyncStorage.getItem('mj-token');
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.send(formData);
    const promise = new Promise((p_resolve, p_error) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status === 200) {
          p_resolve(JSON.parse(xhr.responseText));
        } else {
          console.log('error', xhr.responseText);
          p_error({error: xhr.responseText});
        }
      };
    });

    return promise as Promise<MediaAPIResponse[]>;
  }