import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX, Volume1 } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Atualiza o tempo atual do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateTime);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  // Formata o tempo em minutos:segundos
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Ícone de volume baseado no nível
  const VolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX size={20} />;
    if (volume < 0.5) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-xl"
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3">
        {/* Barra de progresso */}
        <div 
          ref={progressRef}
          className="w-full h-1 bg-gray-600 mb-3 cursor-pointer rounded-full overflow-hidden"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-agro-green" 
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          {/* Controles à esquerda */}
          <div className="flex items-center gap-3">
            <button 
              onClick={togglePlay}
              className="text-white hover:text-agro-yellow transition-colors"
              aria-label={isPlaying ? "Pausar" : "Reproduzir"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="text-white text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
          
          {/* Controles à direita */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <button 
                onClick={toggleMute}
                className="text-white hover:text-agro-yellow transition-colors mr-2"
                aria-label={isMuted ? "Ativar som" : "Desativar som"}
              >
                <VolumeIcon />
              </button>
              
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={isMuted ? 0 : volume}
                onChange={changeVolume}
                className="w-16 h-1 accent-agro-green bg-gray-600 rounded-full cursor-pointer"
                aria-label="Volume"
              />
            </div>
            
            <button 
              onClick={toggleFullscreen}
              className="text-white hover:text-agro-yellow transition-colors"
              aria-label="Tela cheia"
            >
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {!isPlaying && !poster && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button 
            onClick={togglePlay}
            className="w-16 h-16 bg-agro-green/90 rounded-full flex items-center justify-center"
            aria-label="Reproduzir vídeo"
          >
            <Play size={32} className="text-white ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
