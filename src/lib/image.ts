export function createSliderImageUrl(images: string[]){
    return images.map((image) => {
        return {
            source: image
        }
    })
} 